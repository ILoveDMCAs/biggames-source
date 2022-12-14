import { Navigation, Footer, CopyrightBox, BlogNavigation } from 'components';
import classname from 'classnames';
import { HTMLAttributes } from 'react';

interface BlogTemplate extends HTMLAttributes<HTMLDivElement> {
    withoutBlogNavigation?: boolean;
    centeredFooterXL?: boolean;
}

export default function BlogTemplate({ children, withoutBlogNavigation, centeredFooterXL }: BlogTemplate) {
    const mainClasses = classname({
        'relative bg-heroBannerBG mt-[80px] md:mt-[130px] px-4': true,
        'lg:grid lg:grid-cols-desktop lg:grid-rows-default lg:justify-items-center': true,
    });

    // const joinCommunityClasses = classname({
    //   relative: true
    // });

    const footerClasses = classname({
        'flex flex-col justify-between mt-[3.25rem] lg:mt-[1.5rem] lg:pb-[3.25rem] px-4': true,
    });

    const innerFooterClasses = classname({
        'lg:max-w-7xl m-auto w-full lg:flex lg:flex-row-reverse': true,
        'xl:m-auto': centeredFooterXL,
    });
    return (
        <>
            <Navigation blog={true} />
            <main className={mainClasses}>
                <BlogNavigation withoutBlogNavigation={withoutBlogNavigation} />
                {children}
            </main>
            <footer className={footerClasses}>
                <div className={innerFooterClasses}>
                    <Footer />
                    <CopyrightBox />
                </div>
            </footer>
        </>
    );
}
