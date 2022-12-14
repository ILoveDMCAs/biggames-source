import classname from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, SyntheticEvent, useRef } from 'react';
import { BlogNavigationItem } from 'components';
interface BlogNavigationI {
    withoutBlogNavigation?: boolean;
}

const navItems = [
    { name: 'All Posts', tag: '', link: '/post' },
    { name: 'Pet Simulator X!', tag: 'Pet Simulator X', link: '/post/category/pet-simulator-x' },
    { name: 'Big PaintBall!', tag: 'Big PaintBall', link: '/post/category/big-paintball' },
    { name: 'My Restaurant', tag: 'My Restaurant', link: '/post/category/my-restaurant' },
    { name: 'Pet Simulator 2', tag: 'Pet Simulator 2', link: '/post/category/pet-simulator-2' },
    { name: 'Giant Survival', tag: 'Giant Survival', link: '/post/category/giant-survival' },
    { name: 'Build and Survive!', tag: 'Build and Survive', link: '/post/category/build-and-survive' },
    { name: 'Other', tag: 'Other', link: '/post/category/other' },
];

export default function BlogNavigation({ withoutBlogNavigation }: BlogNavigationI): JSX.Element {
    const router = useRouter();
    // const [searchString, setSearchString] = useState<string>('');
    const [id, setId] = useState<number>(0);
    const resetRef = useRef<boolean>(false);

    const searchOnClickCB = (e: SyntheticEvent) => {
        const target = e.currentTarget as HTMLButtonElement;
        if (target.dataset.id) {
            // state.getSearchString(navItems[target.dataset.id].tag.toLocaleLowerCase(), parseInt(target.dataset.id));
            setId(Number(target.dataset.id));
        }
    };

    useEffect(() => {
        resetRef.current = true;
    }, []);

    // useEffect(() => {
    //   if (searchString.length === 0 && resetRef.current) {
    //     state.getSearchString('');
    //   }
    // }, [searchString, state]);
    const blogNavWrapper = classname({
        'pt-2 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-4': !withoutBlogNavigation,
        hidden: withoutBlogNavigation,
    });
    // const lupeClassesWrapper = classname({
    //   'absolute top-6 left-[20%] transform-gpu translate-x-[-50%] translate-y-[-50%]':
    //     searchString.length === 0,
    //   hidden: searchString.length > 0
    // });

    // function changeFn(e: ChangeEvent<HTMLInputElement>) {
    //   console.log(e.currentTarget.value, e.currentTarget.value.length);
    //   setSearchString(e.currentTarget.value);
    //   // if (e.currentTarget.value.length > 3) {
    //   //   state.getSearchString(e.currentTarget.value.toLocaleLowerCase());
    //   // }
    // }

    // function searchOnEnter(e: KeyboardEvent<HTMLInputElement>) {
    //   // setSearchString(e.currentTarget.value);

    //   if (e.code === 'Enter' && e.currentTarget.value.length > 3) {
    //     state.getSearchString(e.currentTarget.value.toLocaleLowerCase());
    //   }
    // }
    // function searchOnClick(e: SyntheticEvent) {
    //   const target = e.currentTarget as HTMLButtonElement;
    //   if (target.dataset.id) {
    //     state.getSearchString(
    //       navItems[target.dataset.id].tag.toLocaleLowerCase()
    //     );
    //     setId(Number(target.dataset.id));
    //   }
    // }
    return (
        <div className={blogNavWrapper}>
            <section className="flex justify-between items-center px-4 mb-4">
                <h2 className="hidden md:block font-bold text-size40 m-auto">Developer Blogs</h2>
                {/* <section className="hidden md:block">
          <label className="flex items-center rounded-full bg-white relative">
            <div className={lupeClassesWrapper}>
              <Image src={lupe} alt="lupe_icon" width={18} height={18} />
            </div>
            <input
              onChange={changeFn}
              onKeyDown={searchOnEnter}
              value={searchString}
              className="appearance-none text-center font-bold px-2 rounded-full outline-none py-2 w-full caret-pageBlue"
              type="text"
              name="search"
              placeholder="Search Blogs"
            />
          </label>
        </section> */}
            </section>
            <ul className="flex group gap-6 lg:gap-3 w-full overflow-x-scroll scrollbar scrollbar-width-thin scrollbar-thumb-pageOrange scrollbar-thin px-2 scroll-smooth md:overflow-x-auto lg:overflow-x-visible ">
                {navItems.map((el, i) => {
                    if (el.link === router.pathname) {
                        return (
                            <Link href={el.link} passHref key={el.name}>
                                <a>
                                    <BlogNavigationItem
                                        data-id={i}
                                        searchOnClick={searchOnClickCB}
                                        value={el.name}
                                        className="font-bold whitespace-nowrap cursor-pointer shrink-0 mb-1 px-3 py-2 tracking-tight text-pageOrange relative after:content-[''] after:absolute after:-bottom-1 after:bg-pageOrange after:w-0 after:defaultTransition lg:after:w-full after:left-0 after:h-1"
                                    />
                                </a>
                            </Link>
                        );
                    } else {
                        return (
                            <Link href={el.link} passHref key={el.name}>
                                <a>
                                    <BlogNavigationItem
                                        data-id={i}
                                        searchOnClick={searchOnClickCB}
                                        value={el.name}
                                        className="font-bold whitespace-nowrap  cursor-pointer shrink-0 mb-1 px-3 py-2 tracking-tight hover:text-pageOrange text-timeDone relative after:content-[''] after:absolute after:-bottom-1 after:bg-pageOrange after:w-0 after:defaultTransition lg:after:hover:w-full after:left-0 after:h-1"
                                    />
                                </a>
                            </Link>
                        );
                    }
                })}
            </ul>
            <hr className="border-2 border-black/10 relative -top-1" />
        </div>
    );
}
