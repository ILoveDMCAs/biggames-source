import { HTMLAttributes, memo } from 'react';
import classname from 'classnames';
interface CounterComponentItemI extends HTMLAttributes<HTMLDivElement> {
    time: string | number;
    category: string;
    isDisabled?: boolean;
}

export default memo(function CounterComponentItem({
    time,
    isDisabled,
    category,
    ...rest
}: CounterComponentItemI): JSX.Element {
    const wrapperClasses = classname({
        'rounded-xl h-[78px] w-full sm:max-w-max100 sm:max-h-max100 flex flex-col items-center justify-center': true,
        'bg-white': !isDisabled,
        'bg-timeDone/10': isDisabled,
    });

    const textClasses = classname({
        'font-extrabold text-4xl': true,
        'opacity-50': isDisabled,
    });

    return (
        <div className={wrapperClasses} {...rest}>
            <p className={textClasses}>{time}</p>
            <p className="text-heroTextGrey text-xs font-semibold">{category}</p>
        </div>
    );
});
