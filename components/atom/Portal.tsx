import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useState } from 'react';

export default function Portal({ children, target }: { children: ReactNode; target: string }) {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    return mounted ? createPortal(children, document.querySelector(target) as Element) : null;
}
