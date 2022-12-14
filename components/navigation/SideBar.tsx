import { NavBar, SocialIconList } from 'components';
import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import classname from 'classnames';
import Link from 'next/link';
import { useStore } from 'store/context';
import closingX from 'public/closingX.svg';
import { observer } from 'mobx-react-lite';

// interface SideBarI {}

// const linkArray = [
//   { text: 'home', link: 'home' },
//   { text: 'ourgames', link: 'ourgames' },
//   { text: 'Sick Merch', link: 'https://shop.biggames.io/' },
//   { text: 'Dev Blogs', link: 'https://www.biggames.io/developer-blogs' }
// ];

function SideBar(): JSX.Element {
    const { state } = useStore();
    const router = useRouter();
    function getBtnId(e: SyntheticEvent<EventTarget>) {
        const target = e.currentTarget as HTMLButtonElement;

        if (router.pathname === '/') {
            if (target.dataset.id === 'home' || target.dataset.id === 'ourgames') {
                const el = document.querySelector(`#${target.dataset.id}`);

                el!.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push('/');
        }
        state.toogleHamburger();
    }

    const sidebarClasses = classname({
        'bg-pageBg/70 min-h-screen flex flex-col justify-start backdrop-blur-md': true,
        'w-full fixed top-0 -translate-x-full z-20 defaultTransition': !state.hamburgerOpen,
        'w-full fixed top-0 -translate-x-0 z-20 defaultTransition': state.hamburgerOpen,
    });

    return (
        <div className={sidebarClasses}>
            <NavBar imageH={14} imageW={18} sidebar leftIcon={closingX}></NavBar>
            <div className="pageBg/90 px-4 flex flex-col gap-5 mt-6">
                <div
                    data-id="home"
                    onClick={getBtnId}
                    className="px-4 rounded-full m-auto shadow-sm text-center text-xl text-pageBlack font-bold bg-white w-full max-w-[380px] py-5"
                >
                    Home
                </div>
                <div
                    data-id="ourgames"
                    onClick={getBtnId}
                    className="px-4 rounded-full m-auto shadow-sm text-center text-xl text-pageBlack font-bold bg-white w-full max-w-[380px] py-5"
                >
                    Our Games
                </div>
                <Link href="https://shop.biggames.io/" passHref>
                    <div className="px-4 rounded-full m-auto shadow-sm text-center text-xl text-pageBlack font-bold bg-white w-full max-w-[380px] py-5">
                        <a target="_blank" rel="noopener noreferrer">
                            Sick Merch
                        </a>
                    </div>
                </Link>
                <Link href="/post" passHref>
                    <div
                        onClick={getBtnId}
                        className="px-4 rounded-full m-auto shadow-sm text-center text-xl text-pageBlack font-bold bg-white w-full max-w-[380px] py-5"
                    >
                        <a>Dev Blogs</a>
                    </div>
                </Link>
            </div>
            <SocialIconList className="w-full h-full px-4 gap-4 flex justify-center mt-auto mb-24" />
        </div>
    );
}

export default observer(SideBar);
