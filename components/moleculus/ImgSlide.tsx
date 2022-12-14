import Image, { ImageProps } from 'next/image';
import { Header } from 'components';
import { a, SpringValue } from '@react-spring/web';
import { HTMLAttributes, forwardRef, ForwardedRef } from 'react';
import Link from 'next/link';

interface SpringI {
    boxShadow: SpringValue<string>;
    transform: SpringValue<string>;
}

interface SpringII {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
}

interface ImgSlide extends HTMLAttributes<HTMLDivElement> {
    imgSrc: ImageProps['src'];
    name: string;
    description: string;
    href: string;
    spring?: SpringI | SpringII;
}
export default forwardRef(function ImgSlide(props: ImgSlide, ref: ForwardedRef<HTMLDivElement>): JSX.Element {
    return (
        <a.div ref={ref} style={props.spring} className="h-full w-full md:w-1/3 relative p-5 rounded-3xl bg-white/90">
            <Link href={props.href} passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <div className="relative aspect-video overflow-hidden rounded-3xl">
                        <Image src={props.imgSrc} alt={props.name} layout="responsive" width={454} height={454 * 0.6} />
                    </div>
                    <Header
                        className="flex flex-col items-center mt-5 mb-1"
                        title={props.name}
                        description={props.description}
                        titleStyle="text-pageBlack font-bold text-xl lg:text-size26"
                        descriptionStyle="bg-pageOrange tracking-wider text-white font-bold px-3 py-1 rounded-full mt-2"
                    />
                </a>
            </Link>
        </a.div>
    );
});
