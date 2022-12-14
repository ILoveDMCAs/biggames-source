import { HTMLAttributes, SyntheticEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import bigGames from 'public/bigGames.svg';
import lupe from 'public/lupe.svg';
import classname from 'classnames';
import { useStore } from 'store/context';
import { observer } from 'mobx-react-lite';
import { ClosingXSVG } from 'components';
import { a, useSpring, config } from '@react-spring/web';

interface NavBarI extends HTMLAttributes<HTMLElement> {
    navbar?: boolean;
    sidebar?: boolean;
    blog?: boolean;
    leftIcon: ImageProps['src'];
    imageW: number;
    imageH: number;
}

function NavBar({ navbar, imageW, imageH, sidebar, leftIcon }: NavBarI): JSX.Element {
    const { state } = useStore();
    const router = useRouter();

    const [btnId, setBtnId] = useState<string>('0');

    useEffect(() => {
        if (router.pathname.includes('/post')) {
            setBtnId('3');
        }
    }, [router.pathname]);
    const navWrapperClasses = classname({
        'w-full px-4 fixed top-0 z-[99999] bg-pageBg/70 backdrop-blur-md': navbar,
        'w-full': sidebar,
    });

    const logoClasses = classname({
        'relative -left-5 md:left-0 transform-gpu md:scale-135 md:translate-y-1 md:w-[92px] md:flex md:justify-center':
            true,
        // 'relative -left-4 md:left-0 transform-gpu md:scale-135 md:translate-y-1 md:w-[92px] md:flex md:justify-center':
        //   blog
    });

    function getBtnId(e: SyntheticEvent<EventTarget>) {
        const target = e.currentTarget as HTMLButtonElement;
        if (target.dataset.index) {
            setBtnId(target.dataset.index);
        }

        if (router.pathname === '/') {
            if (target.dataset.id === 'home' || target.dataset.id === 'ourgames') {
                const el = document.querySelector(`#${target.dataset.id}`);
                el!.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push('/');
        }
    }

    const navInnerWrapper = classname({
        'flex py-3 md:py-10 items-center': true,
        'px-4 bg-pageBg/90': sidebar,
    });

    // const lupeClasses = classname({
    //   hidden: !blog,
    //   'rounded-full shrink-0 h-[40px] w-[40px]  bg-white flex justify-center items-center shadow-md md:hidden':
    //     blog
    // });

    // const buttonClasses = classname({
    //   'rounded-full px-3 h-10 bg-white flex justify-center items-center shadow-md':
    //     navbar,
    //   'rounded-full px-4 h-10 bg-white flex justify-center items-center shadow-md':
    //     sidebar
    // });

    const style = useSpring({
        config: config.default,
        transform: state.toggleSearch ? 'translateX(-1%)' : 'translateX(-120%)',
    });

    return (
        <>
            <nav className={navWrapperClasses}>
                <div className={navInnerWrapper}>
                    <div
                        onClick={() => state.toogleHamburger()}
                        className="rounded-full shrink-0 h-[40px] w-[40px]  bg-white flex justify-center items-center shadow-md md:hidden"
                    >
                        <Image src={leftIcon} alt="left_icon" width={imageW} height={imageH} />
                    </div>
                    <div className="w-full flex items-center justify-center md:gap-8 lg:gap-20">
                        <p
                            data-index="0"
                            data-id="home"
                            className={btnId !== '0' ? 'navButton' : 'navButtonSelected'}
                            onClick={getBtnId}
                        >
                            HOME
                        </p>
                        <p
                            data-index="1"
                            data-id="ourgames"
                            className={btnId !== '1' ? 'navButton' : 'navButtonSelected'}
                            onClick={getBtnId}
                        >
                            OUR GAMES
                        </p>
                        <div className={logoClasses}>
                            <Image src={bigGames} alt="BIG_GAMES_LOGO" />
                        </div>
                        <Link href="https://shop.biggames.io/">
                            <a rel="noopener noreferrer">
                                <p
                                    data-index="2"
                                    data-id="sickmerch"
                                    className={btnId !== '2' ? 'navButton' : 'navButtonSelected'}
                                    onClick={getBtnId}
                                >
                                    SICK MERCH
                                </p>
                            </a>
                        </Link>
                        <Link href="/post">
                            <a>
                                <p
                                    data-index="3"
                                    data-id="devblogs"
                                    className={btnId !== '3' ? 'navButton' : 'navButtonSelected'}
                                >
                                    DEV BLOGS
                                </p>
                            </a>
                        </Link>
                    </div>
                    {/* <div
            onClick={() => state.toggleSearchField()}
            className={lupeClasses}
          >
            <Image src={lupe} alt="lupe_icon" width={20} height={20} />
          </div> */}
                </div>
                {!sidebar ? null : <hr />}
                <a.div
                    style={style}
                    className="absolute top-3 w-[95%] bg-white rounded-full overflow-hidden px-2 lg:hidden transform-gpu translate-y-[-50%]"
                >
                    <label className="flex items-center">
                        <div className="relative top-1 ml-2">
                            <Image src={lupe} alt="lupe_icon" width={20} height={20} />
                        </div>
                        <input
                            className="appearance-none font-bold px-2 rounded-full outline-none py-4 w-full caret-pageBlue"
                            type="text"
                            name="search"
                            placeholder="Search Blogs"
                        />
                        <div
                            className="relative bg-timeDone/10 rounded-full p-2"
                            onClick={() => state.toggleSearchField()}
                        >
                            <ClosingXSVG className="w-[14px] h-[14px] fill-[#555555]" />
                        </div>
                    </label>
                </a.div>
            </nav>
        </>
    );
}

export default observer(NavBar);

// const navWrapperClasses = classname({
//   'w-full px-4': navbar,
//   'w-full min-h-screen': sidebar
// });

// const navInnerWrapper = classname({
//   'flex py-3 items-center': true,
//   'px-4 bg-pageBg/90': sidebar
// });
