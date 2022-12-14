import { HTMLAttributes } from 'react';
// import { Maybe, Scalars } from 'types/graphqlTypes';
import { a, useSpring, config } from '@react-spring/web';

interface HeaderI extends HTMLAttributes<HTMLHeadingElement> {
    title?: string;
    description?: string;
    titleStyle: string;
    descriptionStyle: string;
    state?: boolean;
    directionStart?: string;
    directionEnd?: string;
}

export default function Header({
    title,
    description,
    titleStyle,
    descriptionStyle,
    directionStart = 'translateY(-30px)',
    directionEnd = 'translateY(0px)',
    children,
    state = true,
    ...rest
}: HeaderI): JSX.Element {
    const props = useSpring({
        config: config.wobbly,
        transform: !state ? directionStart : directionEnd,
        opacity: !state ? '0' : '1',
        delay: 200,
    });

    return (
        <a.header {...rest} style={props}>
            <h2 className={titleStyle}>{title}</h2>
            {children}
            <p className={descriptionStyle}>{description}</p>
        </a.header>
    );
}
