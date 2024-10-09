import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC<{
    isVisible?: boolean;
    root?: HTMLElement;
    children?: ReactNode;
}> = ({ isVisible, root, children }) => {
    const rootRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        rootRef.current = root || document.body;
    }, [root]);

    return isVisible && rootRef.current
        ? createPortal(children, rootRef.current)
        : null;
};
export default Portal;
