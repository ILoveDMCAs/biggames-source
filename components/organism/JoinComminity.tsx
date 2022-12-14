import { Header, SocialIconList } from 'components';
import Image from 'next/image';
import bigGamesFigure from 'public/bigGamesFigure.svg';
import { useInView } from 'react-intersection-observer';

export default function JoinCommunity(): JSX.Element {
    const { ref, inView } = useInView({
    /* Optional options */
        threshold: 0.5,
    });
    return (
        <div className="w-full px-4 absolute transform-gpu -translate-y-[170px] lg:-translate-y-[200px]" ref={ref}>
            <div className="bg-white m-auto overflow-hidden shadow-joinCommunity mt-12 py-12 lg:max-w-7xl rounded-[50px] lg:max-h-[324px] lg:flex lg:items-center lg:h-full">
                <div className="lg:basis-3/5">
                    <Header
                        state={inView}
                        directionStart="translateY(30px)"
                        directionEnd="translateY(0px)"
                        className="flex flex-col-reverse items-center lg:items-start lg:pl-spacing60 leading-6 lg:gap-6"
                        title="Join our community!"
                        description="Get the latest updates and more."
                        titleStyle="text-pageBlack font-bold text-size34 lg:text-size50 xl:hidden"
                        descriptionStyle="description lg:text-2xl "
                    >
                        <h2 className="text-pageBlack font-bold text-size34 lg:text-size50 hidden xl:block">
                            Join our community today!
                        </h2>
                    </Header>
                    <SocialIconList className="flex justify-center lg:justify-start lg:pl-spacing60 px-4 gap-3 mt-8 lg:mt-10" />
                </div>
                <div className="lg:basis-2/5 hidden lg:block relative top-2">
                    <Image src={bigGamesFigure} alt="BigGames_Figure" />
                </div>
            </div>
        </div>
    );
}
