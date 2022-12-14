import type { NextPage } from 'next';
import {
    HeroBanner,
    ScreenTwo,
    CarouselComp,
    Navigation,
    Footer,
    CopyrightBox,
    BlogItem,
    JoinCommunity,
} from 'components';
import Head from 'next/head';
import dymmyImage from 'public/blog.webp';
import { client } from 'utils/ApolloClient';
import { useStore } from 'store/context';
import classname from 'classnames';
import { ImageProps } from 'next/image';
import { gql, useQuery } from '@apollo/client';

interface PageData {
    counterTime: string;
    counterEndText: string;
    frontImages: {
        image1: ImageProps['src'];
        image2: ImageProps['src'];
    };
    imgObj: {
        name: string;
        image: string;
        type: string;
        link: string;
    }[];
    heroTitleDesc: {
        title: string;
        description: string;
    };
    error: string;
}

export interface Attributes {
    title: string;
    description: string;
    date: string;
    slug: string;
    imgLink: string;
    tag: string;
}

export interface Datum {
    id: string;
    attributes: Attributes;
}

export interface DevBlogs {
    data: Datum[];
}

export interface Data {
    devBlogs: DevBlogs;
}

export interface RootObject {
    data: Data;
}

const DEV_BLOG_LATEST_QUERY = gql`
    query DevBlog {
        devBlogs(sort: "date:desc", pagination: { start: 0, limit: 1 }) {
            data {
                id
                attributes {
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

const Home: NextPage<PageData> = ({ counterTime, counterEndText, frontImages, imgObj, heroTitleDesc }) => {
    const { state } = useStore();
    const { loading, data } = useQuery<Data>(DEV_BLOG_LATEST_QUERY);
    state.getCounterTime(counterTime);
    state.getCounterEndText(counterEndText);
    state.getImgObj(imgObj);
    state.getHeroTitleDesc(heroTitleDesc);

    const mainClasses = classname({
        'relative bg-heroBannerBG mt-[80px] lg:mt-[80px]': true,
    });

    const joinCommunityClasses = classname({
        relative: true,
    });

    const footerClasses = classname({
        'flex flex-col justify-between mt-[6.25rem] lg:mt-[12.5rem] lg:pb-[6.25rem]': true,
    });

    return (
        <div className="bg-pageBg/90 overflow-x-hidden">
            <Head>
                <title>BIG Games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navigation />
            <main className={mainClasses}>
                <HeroBanner frontImages={frontImages} />
                {loading ? (
                    <BlogItem
                        blogHeader="Latest Update"
                        headerTitle="Pet Simulator X - Easter Update"
                        headerDescription="Easter is here and eggs are everywhere! Added Easter Egg Hunt For a limited time, Easter Eggs can be found scattered randomly around the..."
                        linkText="Read More"
                        linkHref="#"
                        withInView
                        blogImgSrc={dymmyImage}
                        frontpage
                        dummy
                        ratioImg={0.75}
                    />
                ) : (
                    <BlogItem
                        blogHeader="Latest Update"
                        headerTitle={!loading && data!.devBlogs.data[0].attributes.title}
                        headerDescription={!loading && data!.devBlogs.data[0].attributes.description}
                        linkText="Read More"
                        linkHref={`/post/${!loading && data!.devBlogs.data[0].attributes.slug}`}
                        withInView
                        blogImgSrc={!loading && data!.devBlogs.data[0].attributes.imgLink}
                        frontpage
                        ratioImg={0.75}
                    />
                )}

                <ScreenTwo />
                <span id="ourgames" className="relative -top-[6.25rem]"></span>
                <CarouselComp />
            </main>
            <div className={joinCommunityClasses}>
                <JoinCommunity />
            </div>
            <footer className={footerClasses}>
                <div className="lg:max-w-7xl m-auto w-full lg:flex lg:flex-row-reverse">
                    <Footer />
                    <CopyrightBox />
                </div>
            </footer>
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    try {
        const {
            data: {
                countdowns: { data },
            },
        } = await client.query({
            query: gql`
                query Frontpage {
                    countdowns {
                        data {
                            attributes {
                                counterTime
                                counterEndText
                                hero_title_desc {
                                    data {
                                        attributes {
                                            title
                                            description
                                        }
                                    }
                                }
                                img_slider_comp {
                                    data {
                                        attributes {
                                            imgObj {
                                                name
                                                image
                                                type
                                                link
                                            }
                                        }
                                    }
                                }
                                front_image {
                                    data {
                                        attributes {
                                            items {
                                                image1
                                                image2
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
        });
        console.log(data[0].attributes.front_image.data.attributes.items);
        return {
            props: {
                counterTime: data[0].attributes.counterTime,
                counterEndText: data[0].attributes.counterEndText,
                frontImages: data[0].attributes.front_image.data.attributes.items,
                imgObj: data[0].attributes.img_slider_comp.data.attributes.imgObj,
                heroTitleDesc: data[0].attributes.hero_title_desc.data.attributes,
            },
            revalidate: 100,
        };
    } catch (error) {
        return {
            props: {
                counterTime: '',
                counterEndText: 'Coming Soon',
                blog: {
                    title: '',
                    description: '',
                    slug: '',
                    imgLink: 'https://i.imgur.com/UUBKgtb.png',
                    tag: '',
                    mainPageHeaderTitle: '',
                },
                imgObj: [
                    {
                        name: '',
                        image: 'https://i.imgur.com/UUBKgtb.png',
                        type: '',
                        link: '#',
                    },
                ],
                heroTitleDesc: {
                    title: '',
                    description: '',
                },
            },
        };
    }
}
