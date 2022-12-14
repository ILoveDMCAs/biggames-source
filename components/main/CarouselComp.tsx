import { Header, ImageSlider2 } from 'components';
import { useInView } from 'react-intersection-observer';
// interface CarouselCompI {}

export default function CarouselComp(): JSX.Element {
    const { ref, inView } = useInView({
        triggerOnce: true,
        /* Optional options */
        threshold: 0.5,
    });

    return (
        <div className="w-full relative flex justify-center pb-[200px]" ref={ref}>
            <div className="w-full">
                <Header
                    state={inView}
                    directionStart="translateY(15px)"
                    directionEnd="translateY(0px)"
                    className="leading-6 relative pt-14"
                    title="Our Games"
                    description="Check out our ever expanding library of games here."
                    titleStyle="title text-size40"
                    descriptionStyle="description text-xl mt-2"
                />
                <div className="">
                    <ImageSlider2 />
                </div>
            </div>
        </div>
    );
}
