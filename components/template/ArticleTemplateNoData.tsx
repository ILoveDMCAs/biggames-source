import Head from 'next/head';
import { BlogTemplate } from 'components';

export default function ArticleTemplateNoData(): JSX.Element {
    return (
        <div className="bg-pageBg/90 overflow-x-hidden">
            <Head>
                <title>DEV BLOGS | BIG Games</title>
            </Head>
            <BlogTemplate withoutBlogNavigation centeredFooterXL>
                <div className="col-start-2 col-end-3 lg:max-w-8xl h-[70vh] flex">
                    <h2 className="hidden md:block font-bold text-size40 m-auto">Nothing yet here</h2>
                </div>
            </BlogTemplate>
        </div>
    );
}
