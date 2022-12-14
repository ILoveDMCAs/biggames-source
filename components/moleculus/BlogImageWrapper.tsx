import classnames from 'classnames';
import Image, { ImageProps } from 'next/image';
interface BlogImageWrapperI {
    frontpage?: boolean;
    blogMain?: boolean;
    blogItem?: boolean;
    blogImgSrc: ImageProps['src'];
    ratioImg: number;
}
export default function BlogImageWrapper({
    frontpage,
    blogMain,
    blogItem,
    blogImgSrc,
    ratioImg,
}: BlogImageWrapperI): JSX.Element {
    const imgClassesWrapper = classnames({
        'py-2': frontpage || blogMain,
        'relative overflow-hidden rounded-blog': frontpage || blogMain || blogItem,
    });

    const imageWrapperClassesInner = classnames({
        'w-1/2 h-3/5 rounded-blog overflow-hidden relative': frontpage || blogMain,
        'w-1/2 h-3/4 rounded-blog overflow-hidden relative': blogItem,
    });
    return (
        <div className={imgClassesWrapper}>
            <div className="blur-md relative ">
                <Image src={blogImgSrc} alt="blog_monster" width={454} height={454 * ratioImg} />
            </div>
            <div className="absolute top-0 w-full h-full flex justify-center items-center">
                <div className={imageWrapperClassesInner}>
                    <Image src={blogImgSrc} alt="blog_monster1" width={227} height={227} />
                </div>
            </div>
        </div>
    );
}
