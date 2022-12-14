import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import plus from 'public/plus.svg';
interface FooterBoxesI extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    boxOpener: () => void;
    boxTitle: string;
    heightOpen: string;
    childrenWrapperStyle?: string;
}

export default function FooterBox({
    boxTitle,
    heightOpen,
    isOpen,
    boxOpener,
    children,
    childrenWrapperStyle,
    ...rest
}: FooterBoxesI): JSX.Element {
    const fieldClasses = classnames({
        defaultTransition: true,
        'h-0': !isOpen,
        [`${heightOpen}`]: isOpen,
        [`${childrenWrapperStyle}`]: childrenWrapperStyle,
    });

    const iconClasses = classnames({
        'defaultTransition w-6 h-6 flex items-center justify-center hidden': true,
        'rotate-0': !isOpen,
        'rotate-45': isOpen,
    });
    return (
        <div className="overflow-hidden" {...rest}>
            <div className="flex justify-between items-center">
                <h2 className="footerTitle" onClick={boxOpener}>
                    {boxTitle}
                </h2>
                <div className={iconClasses}>
                    <Image src={plus} alt="plus_svg" />
                </div>
            </div>
            <div className={fieldClasses}>{children}</div>
        </div>
    );
}
