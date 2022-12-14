import Link from 'next/link';
import Image from 'next/image';
import twitter from 'public/twitter.svg';
import yt from 'public/yt.svg';
import discord from 'public/discord.svg';
import { HTMLAttributes } from 'react';
// interface SocialIconListI extends HTMLAttributes<HTMLUListElement> {}

export default function SocialIconList({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div {...rest}>
            <Link href="https://discord.biggames.io" passHref>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center sidebarSocialBtn shadow-glowBlue bg-discord cursor-pointer"
                >
                    <Image src={discord} alt="discord" />
                </a>
            </Link>
            <Link href="https://twitter.com/BuildIntoGames/" passHref>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center sidebarSocialBtn shadow-glowLightBlue bg-twitter cursor-pointer"
                >
                    <Image src={twitter} alt="twitter" />
                </a>
            </Link>
            <Link href="https://youtube.com/c/BuildIntoGames" passHref>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center sidebarSocialBtn shadow-glowRed bg-yt cursor-pointer"
                >
                    <Image src={yt} alt="yt" />
                </a>
            </Link>
        </div>
    );
}
// className="absolute w-full -bottom-[80px] px-4 gap-4 flex"
