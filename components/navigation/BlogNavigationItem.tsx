import { HTMLAttributes, memo, createElement, SyntheticEvent } from 'react';
interface BlogNavigationItemI extends HTMLAttributes<HTMLLIElement> {
    searchOnClick: (e: SyntheticEvent) => void;
    value: string;
}

export default memo(function BlogNavigationItem({ searchOnClick, value, ...rest }: BlogNavigationItemI): JSX.Element {
    // console.log(stateId, dataId);
    // const wrapperClasses = classname({
    //   "font-bold cursor-pointer shrink-0 mb-1 px-3 py-2 tracking-tight text-pageOrange relative after:content-[''] after:absolute after:-bottom-1 after:bg-pageOrange after:w-0 after:defaultTransition lg:after:hover:w-full after:left-0 after:h-1":
    //     dataId === stateId,
    //   "font-bold cursor-pointer shrink-0 mb-1 px-3 py-2 tracking-tight hover:text-pageOrange text-timeDone relative after:content-[''] after:absolute after:-bottom-1 after:bg-pageOrange after:w-0 after:defaultTransition lg:after:hover:w-full after:left-0 after:h-1":
    //     dataId !== stateId
    // });

    return createElement(
        'li',
        {
            onClick: searchOnClick,
            ...rest,
        },
        value
    );
});
