import Image from 'next/image';
import logo from 'public/bigGames.svg';
// interface CopyrightBoxI {}

export default function CopyrightBox(): JSX.Element {
    return (
        <div className="mb-20 lg:mb-0 w-full lg:flex lg:w-full lg:mt-12 px-4 lg:pl-4">
            <div className="flex flex-col">
                <div className="flex justify-center lg:justify-start py-3 lg:py-0">
                    <Image src={logo} alt="logo" />
                </div>
                <p className="font-medium text-timeDone lg:mt-auto text-center lg:text-left">
                    Copyright © 2022 BIG Games.
                </p>
                <p className="font-medium text-timeDone text-center lg:text-left">All rights reserved.</p>
            </div>
        </div>
    );
}
