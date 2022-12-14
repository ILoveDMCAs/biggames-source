import type { NextPage, GetStaticPropsContext } from 'next';
// import { useRouter } from 'next/router';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import ReactHtmlParser from 'react-html-parser';
import { gql } from '@apollo/client';
import { client } from 'utils/ApolloClient';
import dayjs from 'dayjs';
import { BlogTemplate, DateItem, Header, ArticleTemplateNoData } from 'components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import twitterBird from 'public/twitterBird.svg';
import shareButton from 'public/shareButton.svg';

interface Header {
    title: string;
    descriptionshort: string;
    date: string;
}

interface BelowHeader {
    textLong: string;
    textShort: string;
}

interface TxtContent {
    content: string;
}

interface Footer {
    link: string;
    linkDesc: string;
}

interface ArticleProps {
    header: Header;
    belowHeader: Array<BelowHeader>;
    txtContent: TxtContent[];
    footer: Footer[];
    metaImgLink: string;
    slug: string;
}

/* eslint-disable react/no-children-prop */
const BlogDetail: NextPage<ArticleProps> = ({ header, txtContent, footer, metaImgLink, slug }) => {
    if (!header || !footer) {
        return <ArticleTemplateNoData />;
    }
    // console.log(header, 'Header');
    // const router = useRouter();

    // if (router.isFallback) {
    //     return <div>Loading...</div>;
    // }
    // const mainClasses = classname({
    //   'relative bg-heroBannerBG mt-[80px] md:mt-[130px] px-4': true
    // });

    // const joinCommunityClasses = classname({
    //   relative: true
    // });

    // const footerClasses = classname({
    //   'flex flex-col justify-between mt-[3.25rem] lg:mt-[1.5rem] lg:pb-[3.25rem] px-4':
    //     true
    // });

    async function shareLink(params: { title: string; url: string }): Promise<void> {
        try {
            await navigator.share(params);
            // console.log(params);
        } catch (error) {
            // console.log('shareError');
        }
    }
    return (
        <div className="bg-pageBg/90 overflow-x-hidden">
            <Head>
                <title>DEV BLOGS | BIG Games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:site_name" content={header.date} />
                <meta property="og:title" content={header.title} />
                <meta property="og:description" content={header.descriptionshort} />
                <meta property="og:image" content={metaImgLink} />
            </Head>
            <BlogTemplate withoutBlogNavigation centeredFooterXL>
                <div className="px-4 mt-6 py-4 max-w-7xl 2xl:m-auto row-start-2 row-end-3 col-start-2 col-end-3">
                    <DateItem className="dateItem">{dayjs(header.date).format('MMMM DD, YYYY')}</DateItem>
                    <Header
                        className="leading-10 mt-2 relative"
                        title={header.title}
                        description={header.descriptionshort}
                        titleStyle="font-bold text-size28 text-pageBlack"
                        descriptionStyle="font-bold text-articleGrey leading-6 my-2"
                    />
                    <div>
                        {txtContent.map((el: TxtContent, i: number) => (
                            <div key={el.content + i}>
                                {/* <ReactMarkdown children={el.content} remarkPlugins={[remarkGfm]} /> */}
                                {ReactHtmlParser(el.content)}
                            </div>
                        ))}
                    </div>
                    <hr className="border-2 my-4" />
                    <div className="flex justify-between py-2">
                        <div className="flex gap-2">
                            <div className="bg-white rounded-full h-8 w-8 flex justify-center cursor-pointer">
                                <Image
                                    width={17}
                                    height={17}
                                    src={twitterBird}
                                    alt="twitterBird"
                                    onClick={() =>
                                        shareLink({
                                            title: header.title,
                                            url: `https://twitter.com/intent/tweet?url=https://biggames.io/post/${slug}`,
                                        })
                                    }
                                />
                            </div>
                            <div className="bg-white rounded-full h-8 w-8 flex justify-center cursor-pointer">
                                <Image width={17} height={17} src={shareButton} alt="share_button" />
                            </div>
                        </div>
                        <Link href={footer[1].link} passHref>
                            <p className="text-articleGrey cursor-pointer">
                                <span className="font-bold text-pageBlack">Tags: </span>
                                {footer[1].linkDesc}
                            </p>
                        </Link>
                    </div>
                </div>
            </BlogTemplate>
        </div>
    );
};

export default BlogDetail;
/* eslint-disable react/no-children-prop */
export async function getStaticPaths() {
    try {
        const {
            data: {
                devBlogs: { data },
            },
        } = await client.query({
            query: gql`
                query Paths {
                    devBlogs {
                        data {
                            attributes {
                                slug
                            }
                        }
                    }
                }
            `,
        });
        // console.log(data);
        const paths = data.map(el => {
            return {
                params: { id: el.attributes.slug },
            };
        });
        return {
            paths,
            fallback: 'blocking',
        };
    } catch (error) {
        return {
            params: {},
        };
    }
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const id = ctx.params!.id;
    // console.log(id, 'id');
    try {
        const {
            data: {
                articles: { data },
            },
        } = await client.query({
            query: gql`
      query ArticleItem {
        articles(
          filters: { slug: { eq: "${id}" } }
        ) {
          data {
            attributes {
              Header {
                title
                descriptionshort
                date
              }
              TextEl {
                textLong
                textShort
              }
              TitleDesc {
               content
              }
              Footer {
                link
                linkDesc
              }
              slug
              imgLink
            }
          }
        }
      }
      `,
        });
        console.log(data);
        return {
            props: {
                header: data[0].attributes.Header,
                belowHeader: data[0].attributes.TextEl,
                txtContent: data[0].attributes.TitleDesc,
                footer: data[0].attributes.Footer,
                metaImgLink: data[0].attributes.imgLink,
                slug: data[0].attributes.slug,
            },
            revalidate: 100,
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                footer: [
                    { link: '', linkDesc: '' },
                    { link: '', linkDesc: '' },
                ],
            },
        };
    }
}
// imgString
