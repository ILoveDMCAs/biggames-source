import { HTMLAttributes } from 'react';
import Link from 'next/link';

interface FooterItemListI extends HTMLAttributes<HTMLUListElement> {
    liArr: { txt: string; link: string }[];
    liStyle?: string;
}

export default function FooterItemList({ liArr, liStyle, ...rest }: FooterItemListI): JSX.Element {
    return (
        <ul {...rest}>
            {liArr.map(el => (
                <li key={el.txt} className={liStyle}>
                    <Link href={el.link} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            {el.txt}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
