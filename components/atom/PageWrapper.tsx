import { createElement, HTMLAttributes } from 'react';
import classname from 'classnames';

// interface PageWrapperI extends HTMLAttributes<HTMLDivElement> {}

export default function PageWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const wrapperClasses = classname({
        'grid grid-cols-mobile grid-rows-default bg-pageBg/90': true,
    });
    return createElement('div', { className: wrapperClasses, ...rest }, children);
}
