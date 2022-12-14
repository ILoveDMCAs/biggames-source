import { useLazyQuery, gql } from '@apollo/client';
import Link from 'next/link';
import { BlogItem, BlogTemplate } from 'components';
import { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { DevBlog } from 'types/graphqlTypes';
import { throttle } from 'hook/throttle';

interface BlogContentWrapperI {
    dataProps: DevBlog[];
    fetchMoreQueryString: string;
}

const FEED_QUERY = gql`
    query DevBlog($searchString: String!, $offset: Int!, $limit: Int!) {
        devBlogs(
            filters: { tag: { startsWith: $searchString } }
            sort: "date:desc"
            pagination: { start: $offset, limit: $limit }
        ) {
            data {
                attributes {
                    mainPageHeaderTitle
                    title
                    description
                    date
                    slug
                    imgLink
                    tag
                }
            }
        }
    }
`;

export default function BlogContentWrapper({ dataProps, fetchMoreQueryString }: BlogContentWrapperI): JSX.Element {
    const router = useRouter();
    const setStopFetchingRef = useRef<number>(1);
    const [shouldFetch, setShouldFetch] = useState<boolean>(false);
    const fetchArticles = useRef<boolean>(false);
    const [fetchMore, { data }] = useLazyQuery(FEED_QUERY, {
        variables: {
            searchString: '',
            offset: 0,
            limit: 10,
        },
    });

    const [blogArr, setBlogArr] = useState<typeof dataProps>(dataProps);
    const blogRef = useRef<HTMLDivElement>(null);

    const fetchOffset = useRef<number>(10);

    useEffect(() => {
        const throttleHeight = throttle(() => {
            console.log(window.scrollY);
            if (
                blogRef.current! &&
                Math.floor(blogRef.current!.offsetHeight * 0.8) - Math.floor(window.scrollY) < 0 &&
                !shouldFetch &&
                setStopFetchingRef.current > 0
            ) {
                fetchArticles.current = true;
                setShouldFetch(p => !p);
            }
        }, 500);

        window.addEventListener('scroll', throttleHeight);

        return () => removeEventListener('scroll', throttleHeight);
    }, [router.pathname, shouldFetch]);

    useEffect(() => {
        // console.log(fetchOffset.current, 'offset');
        if (shouldFetch) {
            fetchMore({
                variables: {
                    searchString: fetchMoreQueryString,
                    offset: fetchOffset.current,
                    limit: 10,
                },
            });
            fetchArticles.current = true;
            fetchOffset.current += 10;
        }
    }, [shouldFetch, fetchMoreQueryString, fetchMore]);

    useEffect(() => {
        if (data) {
            setStopFetchingRef.current = data.devBlogs.data.length;
            setBlogArr(p => [...p, ...data.devBlogs.data]);
        }
    }, [data]);

    return (
        <BlogTemplate>
            <div className="lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3" ref={blogRef}>
                <BlogItem
                    blogHeader={dataProps[0].attributes.mainPageHeaderTitle}
                    headerTitle={dataProps[0].attributes.title}
                    headerDescription={dataProps[0].attributes.description}
                    linkText="Read More"
                    linkHref={`/post/${dataProps[0].attributes.slug}`}
                    blogImgSrc={dataProps[0].attributes.imgLink}
                    blogMain
                    ratioImg={0.75}
                />
                <div className="lg:grid lg:grid-cols-3 xl:grid-cols-3 lg:gap-2 lg:gap-y-4 lg:max-w-8xl pb-5">
                    {blogArr &&
                        blogArr.map((el: DevBlog, i: number) => {
                            if (i > 0) {
                                return (
                                    <Link key={el.attributes.title! + i} href={`/post/${el.attributes.slug}`}>
                                        <a>
                                            <BlogItem
                                                key={el.attributes.title}
                                                blogHeader=""
                                                headerTitle={el.attributes.title}
                                                headerDescription={el.attributes.description}
                                                linkText=""
                                                linkHref=""
                                                withLink={false}
                                                blogImgSrc={el.attributes.imgLink}
                                                blogItem
                                                date={dayjs(el.attributes.date).format('MMMM DD, YYYY')}
                                                ratioImg={0.6}
                                            />
                                        </a>
                                    </Link>
                                );
                            } else return null;
                        })}
                </div>
            </div>
        </BlogTemplate>
    );
}
