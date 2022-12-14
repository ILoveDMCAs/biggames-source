import { HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';

interface IconTextI extends HTMLAttributes<HTMLDivElement> {
    src: ImageProps['src'];
    width?: number;
    height?: number;
    linkTxt: string;
}

export default function IconText2({ width = 20, height = 20, linkTxt, src, ...rest }: IconTextI) {
    return (
        <div {...rest}>
            <Image alt="icon" width={width} height={height} src={src} />
            <a target="_blank" rel="noopener noreferrer" className="">
                {linkTxt}
            </a>
        </div>
    );
}
