import { NavBar, SideBar } from 'components';
import hamburger from 'public/hamburger.svg';
interface NavigationI {
    blog?: boolean;
}

export default function Navigation({ blog = false }: NavigationI): JSX.Element {
    return (
        <>
            <SideBar />
            <NavBar imageW={17} imageH={12} blog={blog} navbar leftIcon={hamburger} />
        </>
    );
}
