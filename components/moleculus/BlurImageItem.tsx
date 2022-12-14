import Image, { ImageProps } from 'next/image';
import classname from 'classnames';
import { HTMLAttributes } from 'react';
interface BlurImageItemI extends HTMLAttributes<HTMLDivElement> {
    img: ImageProps['src'];
    wrapperStyle: string;
    blurStyle: string;
    brownM?: boolean;
    greenM?: boolean;
}

export default function BlurImageItem({
    img,
    wrapperStyle,
    brownM,
    greenM,
    blurStyle,
    ...rest
}: BlurImageItemI): JSX.Element {
    const wrapperClasses = classname({
        'relative flex items-center': true,
        [`${wrapperStyle}`]: true,
    });

    const blurClasses = classname({
        'shadow-monsters absolute left-4 bottom-4  sm:bottom-4 sm:left-4 sm:bottom-4 lg:left-3 lg:bottom-14': brownM,
        'shadow-monsters absolute left-8 bottom-4 sm:left-10 sm:bottom-4 lg:left-16 lg:bottom-9': greenM,
        [`${blurStyle}`]: true,
    });
    return (
        <div className={wrapperClasses} {...rest}>
            <div className={blurClasses}></div>
            <Image priority={true} src={img} alt="blurred_image" layout="fill" />
        </div>
    );
}
