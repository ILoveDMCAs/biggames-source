import { HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

interface IconTextI extends HTMLAttributes<HTMLDivElement> {
    src: ImageProps['src'];
    width?: number;
    height?: number;
    href: string;
    linkTxt: string;
    withLink?: boolean;
}

export default function IconText({ width = 20, height = 20, href, linkTxt, src, withLink = true, ...rest }: IconTextI) {
    return (
        <>
            {withLink ? (
                <Link href={href} passHref>
                    <div {...rest}>
                        <Image alt="icon" width={width} height={height} src={src} />
                        {/* <a target="_blank" rel="noopener noreferrer" className=""> */}
                        <a className="">{linkTxt}</a>
                    </div>
                </Link>
            ) : (
                <div {...rest}>
                    <Image alt="icon" width={width} height={height} src={src} />
                    <p>{linkTxt}</p>
                </div>
            )}
        </>
    );
}
