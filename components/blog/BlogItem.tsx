import { Header, IconText, DateItem, BlogImageWrapper } from 'components';
import arrrow from 'public/arrow.svg';
import { ImageProps } from 'next/image';
import { useInView } from 'react-intersection-observer';
import { HTMLAttributes, memo } from 'react';
import classnames from 'classnames';
interface BlogItemI extends HTMLAttributes<HTMLDivElement> {
    blogHeader: string;
    headerTitle?: string;
    dummy?: boolean;
    headerDescription?: string;
    linkText: string;
    linkHref: string;
    withInView?: boolean;
    frontpage?: boolean;
    blogMain?: boolean;
    blogItem?: boolean;
    date?: string;
    withLink?: boolean;
    blogImgSrc: ImageProps['src'];
    ratioImg: number;
}

export default memo(function BlogItem({
    blogHeader,
    ratioImg,
    headerTitle,
    headerDescription,
    linkText,
    dummy = false,
    linkHref,
    withInView,
    frontpage,
    blogMain,
    blogItem,
    blogImgSrc,
    withLink = true,
    date,
}: BlogItemI): JSX.Element {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
    });

    const wrapperClasses = classnames({
        'font-Flow': dummy,
        'bg-white/80 py-10 xl:py-40 flex justify-center': frontpage,
        'lg:py-10 max-w-[450px] lg:max-w-none m-auto flex justify-start mb-4 cursor-pointer': blogMain,
        'm-auto mb-4 lg:mb-0 lg:m-[initial] bg-white h-full self-start lg:bg-transparent hover:bg-white hover:shadow-md cursor-pointer defaultTransition max-w-[480px] rounded-blog pt-4 pb-5 px-1':
            blogItem,
    });

    const blogHeaderClasses1 = classnames({
        'font-bold lg:hidden mt-12 mb-6 text-center text-pageOrange': !blogItem,
        hidden: blogItem,
    });
    const blogHeaderClasses2 = classnames({
        'font-medium hidden lg:block text-center xl:text-left text-pageOrange': !blogItem,
        hidden: blogItem,
    });

    const IconTextClasses = classnames({
        'flex justify-center lg:mt-4 xl:justify-start transform relative -translate-y-9 lg:translate-y-0': !blogItem,
        hidden: blogItem,
    });

    const headerTitleClasses = classnames({
        'font-Flow': dummy,
        'title text-size34 xl:text-size50 xl:my-4 xl:text-left': !blogItem,
        'title text-size34 xl:text-size50 xl:my-4 text-left leading-none': blogItem,
    });

    const innerWraperClasses = classnames({
        'px-4 flex flex-col lg:flex-row gap-8 xl:gap-14 lg:max-w-7xl': frontpage || blogMain,
        'px-4 flex flex-col gap-8 xl:gap-14 lg:max-w-7xl': blogItem,
    });

    const headerDescriptionClasses = classnames({
        'font-Flow': dummy,
        'description xl:text-left text-lg mt-2 leading-6': !blogItem,
        'description text-sm text-left text-lg mt-2 leading-4 min-h-[50px] h-full': blogItem,
    });

    const blurredClasses = classnames({
        'absolute -top-1 z-[0] w-[110%] h-[100px] blur-sm bg-white/90 to-transparent lg:hidden': frontpage,
        'absolute top-5 z-[0] w-[110%] h-[40px] blur-sm bg-heroBannerBG to-transparent lg:hidden': blogMain,
    });
    return (
        <div className={wrapperClasses}>
            <div className={innerWraperClasses}>
                <div className="sm:max-w-lg xl:max-w-xl m-auto">
                    <p className={blogHeaderClasses1}>{blogHeader}</p>
                    <BlogImageWrapper
                        frontpage={frontpage}
                        blogMain={blogMain}
                        blogItem={blogItem}
                        blogImgSrc={blogImgSrc}
                        ratioImg={ratioImg}
                    />
                </div>
                <div className="sm:max-w-lg m-auto" ref={!withInView ? null : ref}>
                    <p className={blogHeaderClasses2}>{blogHeader}</p>
                    <DateItem className="dateItem">{date}</DateItem>
                    <Header
                        state={!withInView ? true : inView}
                        directionStart="translateX(30px)"
                        directionEnd="translateX(0px)"
                        className="leading-12 relative"
                        title={headerTitle}
                        description={headerDescription}
                        titleStyle={headerTitleClasses}
                        descriptionStyle={headerDescriptionClasses}
                    />
                    <div className={IconTextClasses}>
                        <div className={blurredClasses}></div>
                        <IconText
                            className="roundButtonClass bg-pageBlue shadow-glowBlue flex flex-row-reverse"
                            src={arrrow}
                            href={linkHref}
                            linkTxt={linkText}
                            withLink={withLink}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});
