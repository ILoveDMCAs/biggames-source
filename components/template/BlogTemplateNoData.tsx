import Head from 'next/head';
import { BlogTemplate } from 'components';
// interface BlogTemplateNoDataI {}

export default function BlogTemplateNoData(): JSX.Element {
    return (
        <div>
            <Head>
                <title>DEV BLOGS | BIG Games| Pet Simulator X</title>
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
                <div className="col-start-2 col-end-3 lg:max-w-8xl h-96 flex">
                    <h2 className="hidden md:block font-bold text-size40 m-auto">Nothing yet here</h2>
                </div>
            </BlogTemplate>
        </div>
    );
}
