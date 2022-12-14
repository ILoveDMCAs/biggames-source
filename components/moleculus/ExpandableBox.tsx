import Image from 'next/image';
import plus from 'public/plus.svg';
import classname from 'classnames';

import { HTMLAttributes, SyntheticEvent } from 'react';

interface ExpandableBoxI extends HTMLAttributes<HTMLDivElement> {
    title: string;
    desc?: string;
    icon?: boolean;
    logoBox?: boolean;
    id?: string;
    clickedId?: string;
    closeSame: boolean;
    getId: (e: SyntheticEvent<EventTarget>) => void;
}

export default function ExpandableBox({
    children,
    title,
    icon,
    desc,
    clickedId,
    id,
    closeSame,
}: ExpandableBoxI): JSX.Element {
    // const [open, setOpen] = useState<boolean>(false);

    // function openField() {
    //   setOpen(p => !p);
    // }

    // const wrapperClasses = classname({
    //   'w-[200px] sm:w-[270px]': logoBox,
    //   'lg:max-w-[37.5rem] transform-gpu transition-all relative duration-200 z-20 px-3 pb-3 rounded-2xl bg-pageWhite flex flex-col overflow-hidden hover:cursor-pointer':
    //     true,
    //   'h-[60px]': id !== clickedId,
    //   'h-[120px]': id === clickedId,
    //   [`${className}`]: className
    // });

    const plusIcon = classname({
        'transform-gpu transition-all origin-center': true,
        'rotate-45': id === clickedId,
        'rotate-0': id !== clickedId,
    });

    const itemClasses = classname({
        'transform-gpu transition-all mt-1 h-full duration-200': true,
        'opacity-100 delay-500 ': id === clickedId,
        'opacity-0': id !== clickedId || closeSame,
    });

    return (
        <section>
            <div>
                <div className="flex h-[60px] w-full items-center justify-between">
                    <header className="">
                        <h4 className="md:text-xl font-bold text-black dark:text-white">{title}</h4>
                        <p className="sm:text-base text-black/70 dark:text-white/70">{desc}</p>
                    </header>
                    {icon ? (
                        <div className={plusIcon}>
                            <Image src={plus} alt="plus_icon" width={25} height={25} />
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={itemClasses}>{children}</div>
        </section>
    );
}
