import { useEffect, useRef, useState } from 'react';

interface Settings {
    openMenuIdent: string;
    closeMenuIdent: string;
}

export const useMenuKeyboard = (
    initialMenuState: boolean,
    settings: Partial<Settings>
) => {
    const [isMenuOpen, setIsMenuOpen] = useState(initialMenuState);
    const prevMenuState = useRef<boolean>(false);

    const [root, setRoot] = useState<HTMLElement | null>(null);
    const openBtnRef = useRef<HTMLButtonElement | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    const defaultSettings: Settings = {
        openMenuIdent: 'button[aria-label="open menu"]',
        closeMenuIdent: 'button[aria-label="close menu"]',
        ...settings,
    };

    useEffect(() => {
        if (!root) return;

        // setting up menu toggle button refs
        if (!openBtnRef.current) {
            openBtnRef.current = root.querySelector(
                defaultSettings.openMenuIdent
            );
        }
        if (!closeBtnRef.current) {
            closeBtnRef.current = root.querySelector(
                defaultSettings.closeMenuIdent
            );
        }
    }, [
        defaultSettings.closeMenuIdent,
        defaultSettings.openMenuIdent,
        isMenuOpen,
        root,
    ]);

    useEffect(() => {
        const handleKeyDown = (ev: KeyboardEvent) => {
            if (ev.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // settings focus if menu is open
        if (isMenuOpen) {
            closeBtnRef?.current?.focus();
        } else if (prevMenuState.current) {
            openBtnRef?.current?.focus();
        }

        prevMenuState.current = isMenuOpen;
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    return {
        setRoot,
        isMenuOpen,
        setIsMenuOpen,
    };
};
