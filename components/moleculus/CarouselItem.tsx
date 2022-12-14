import Image, { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';

interface CarouselItemI extends HTMLAttributes<HTMLElement> {
    src: ImageProps['src'];
    title: string;
    description: string;
}

export default function CarouselItem({ src, title, description }: CarouselItemI): JSX.Element {
    return (
        <div className="aspect-video w-full relative">
            <Image src={src} layout="fill" alt="blog_image" />\
            <div className="w-full absolute bottom-0 bg-white/40">
                <header className="h-[80px] leading-5 flex flex-col items-center">
                    <h2 className="font-bold text-size26 py-2">{title}</h2>
                    <p className="bg-pageOrange m-auto px-3 py-1 tracking-wider text-white font-bold rounded-full mt-2">
                        {description}
                    </p>
                </header>
            </div>
            {/* <Header
            className="absolute bottom-0 sm:flex flex-col items-center mt-5 mb-1"
            title={title}
            description={description}
            titleStyle="text-pageBlack font-bold text-size26"
            descriptionStyle="bg-pageOrange tracking-wider text-white font-bold px-3 py-1 rounded-full mt-2"
          /> */}
        </div>
    // <figure className="w-full h-[280px] rounded-xl flex flex-col relative">
    //   <div className="h-[100px] w-full">
    //     <Image src={src} layout="fill" />
    //   </div>
    //   <header className="h-[100px] bg-white">
    //     <h2 className="font-bold text-size26">{title}</h2>
    //     <p>{description}</p>
    //   </header>
    // </figure>
    );
}
