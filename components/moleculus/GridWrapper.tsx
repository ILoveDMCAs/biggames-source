import { HTMLAttributes } from 'react';
// interface GridWrapperI {}

export default function GridWrapper({ children }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div className="mt-6 pb-6 grid grid-cols-desktop justify-items-center">
            <div className="col-start-2 col-end-3 ">{children}</div>
        </div>
    );
}
