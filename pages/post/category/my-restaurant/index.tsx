import type { NextPage } from 'next';
import { gql } from '@apollo/client';
import { client } from 'utils/ApolloClient';
import { DevBlog } from 'types/graphqlTypes';
import { BlogTemplateNoData, BlogContentWrapper } from 'components';
import Head from 'next/head';

// const navItems = [
//     { name: 'All Posts', tag: '' },
//     { name: 'Pet Simulator X!', tag: 'Pet Simulator X' },
//     { name: 'My Restaurant', tag: 'My Restaurant' },
//     { name: 'Pet Simulator', tag: 'Pet Simulator' },
//     { name: 'Giant Survival', tag: 'Giant Survival' },
//     { name: 'Build and Survive!', tag: 'Build and Survive' },
//     { name: 'Other', tag: 'Other' },
// ];

interface PageData {
    dataProps: DevBlog[];
}

const BlogMyRestaurant: NextPage<PageData> = ({ dataProps }) => {
    if (dataProps.length === 0) {
        return <BlogTemplateNoData />;
    }

    return (
        <div className="bg-pageBg/90 overflow-x-hidden">
            <Head>
                <title>DEV BLOGS | BIG Games| My Restaurant</title>
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
            <BlogContentWrapper dataProps={dataProps} fetchMoreQueryString="My Restaurant" />
        </div>
    );
};

export default BlogMyRestaurant;

export async function getStaticProps() {
    const {
        data: {
            devBlogs: { data },
        },
    } = await client.query({
        query: gql`
            query DevBlog {
                devBlogs(filters: { tag: { eq: "My Restaurant" } }, sort: "date:desc") {
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
