import type { NextPage } from 'next';
import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useLazyQuery, gql } from '@apollo/client';
import { client } from 'utils/ApolloClient';
import dayjs from 'dayjs';
import { DevBlog } from 'types/graphqlTypes';
import { BlogItem, BlogTemplate } from 'components';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import { throttle } from 'hook/throttle';

// const navItems = [
//     { name: 'All Posts', tag: '' },
//     { name: 'Pet Simulator X!', tag: 'Pet Simulator X' },
//     { name: 'My Restaurant', tag: 'My Restaurant' },
//     { name: 'Pet Simulator', tag: 'Pet Simulator' },
//     { name: 'Giant Survival', tag: 'Giant Survival' },
//     { name: 'Build and Survive!', tag: 'Build and Survive' },
//     { name: 'Other', tag: 'Other' },
// ];
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

interface PageData {
    dataProps: DevBlog[];
}

const Blog: NextPage<PageData> = ({ dataProps }) => {
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

    const throttleHeight = useMemo(
        () =>
            throttle(() => {
                // console.log(Math.floor(blogRef.current!.offsetHeight * 0.8) - Math.floor(window.scrollY));
                if (
                    blogRef.current! &&
                    Math.floor(blogRef.current!.offsetHeight * 0.7) - Math.floor(window.scrollY) < 0 &&
                    !shouldFetch &&
                    setStopFetchingRef.current > 0
                ) {
                    fetchArticles.current = true;
                    console.log('fetched');
                    setShouldFetch(p => !p);
                }
            }, 500),
        [shouldFetch]
    );

    const fetchOffset = useRef<number>(10);

    useEffect(() => {
        window.addEventListener('scroll', throttleHeight);

        return () => removeEventListener('scroll', throttleHeight);
    }, [throttleHeight]);

    useEffect(() => {
        // console.log(fetchOffset.current, 'offset');
        if (shouldFetch) {
            fetchMore({
                variables: {
                    searchString: '',
                    offset: fetchOffset.current,
                    limit: 10,
                },
            });
            fetchArticles.current = true;
            fetchOffset.current += 10;
        }
    }, [shouldFetch, fetchMore]);

    useEffect(() => {
        if (data) {
            setStopFetchingRef.current = data.devBlogs.data.length;
            setBlogArr(p => [...p, ...data.devBlogs.data]);
        }
    }, [data]);

    return (
        <div className="bg-pageBg/90 overflow-x-hidden">
            {/* {console.log(state.searchIndex, 'index')} */}
            <Head>
                <title>DEV BLOGS | BIG Games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="DEV BLOGS | BIG Games" />
                <meta
                    property="og:description"
                    content="Development blogs and updates for BIG Games and our projects!"
                />
                <meta
                    property="og:image"
                    content="https://static.wixstatic.com/media/81ec46_da31c6dfe511436690214229d3bd20fa~mv2.png/v1/fill/w_845,h_670,al_c/81ec46_da31c6dfe511436690214229d3bd20fa~mv2.png"
                />
            </Head>
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
        </div>
    );
};

export default observer(Blog);

export async function getStaticProps() {
    const {
        data: {
            devBlogs: { data },
        },
    } = await client.query({
        query: gql`
            query DevBlog {
                devBlogs(sort: "date:desc") {
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
        `,
    });
    return {
        props: { dataProps: data },
        revalidate: 100,
    };
}
