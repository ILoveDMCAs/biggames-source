import { HTMLAttributes, createElement } from 'react';

export default function DateItem({ children, ...rest }: HTMLAttributes<HTMLParagraphElement>): JSX.Element {
    return createElement('p', { ...rest }, children);
}
