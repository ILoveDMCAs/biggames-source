import { FooterBox, FooterItem } from 'components';
import { HTMLAttributes, useState } from 'react';
import classnames from 'classnames';
// interface FooterI extends HTMLAttributes<HTMLDivElement> {
//     blog?: boolean;
//     frontpage?: boolean;
// }

const siteArr = [
    { txt: 'Merchandise', link: 'https://shop.biggames.io/' },
    { txt: 'Developer Blogs', link: '/post' },
];
export const connectArr = [
    { txt: 'Twitter', link: 'https://twitter.com/BuildIntoGames/' },
    { txt: 'Discord', link: 'https://discord.biggames.io' },
    { txt: 'YouTube', link: 'https://youtube.com/c/BuildIntoGames' },
    { txt: 'Roblox', link: 'https://www.roblox.com/groups/2703304/BIG-Games/' },
];

export default function Footer({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const footerClassesWrapper = classnames({
        'flex flex-row gap-8 mt-12 px-4 lg:px-0 relative md:flex-row justify-evenly lg:w-full': true,
        // 'flex flex-col gap-8 mt-12 px-4 lg:px-0 relative sm:flex-row sm:justify-evenly lg:w-full': blog,
    });
    const [boxOpen1, setOpen1] = useState<boolean>(true);
    const [boxOpen2, setOpen2] = useState<boolean>(false);

    function boxOpener1() {
        setOpen1(p => !p);
        if (boxOpen2) {
            setOpen2(false);
        }
    }
    function boxOpener2() {
        setOpen2(p => !p);
        if (boxOpen1) {
            setOpen1(false);
        }
    }

    return (
        <div className={footerClassesWrapper} {...rest}>
            <FooterBox boxOpener={boxOpener1} isOpen={true} heightOpen="h-[140px]" boxTitle="Site">
                <FooterItem liStyle="py-1 font-medium text-size18 text-timeDone" className="" liArr={siteArr} />
            </FooterBox>
            <FooterBox boxOpener={boxOpener2} isOpen={true} heightOpen="h-[140px]" boxTitle="Connect">
                <FooterItem liStyle="py-1 font-medium text-size18 text-timeDone" className="" liArr={connectArr} />
            </FooterBox>
            {/* <Contact /> */}
        </div>
    );
}
