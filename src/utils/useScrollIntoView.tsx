import { useEffect, useRef, useState } from 'react';

export const useScrollIntoView = (duration: number, delay?: number) => {
    const [activeElement, setActiveElement] = useState<HTMLElement | null>(
        null
    );
    const startTime = useRef<number>(-1);
    const firstPos = useRef<number>(0);
    const [targetPos, setTargetPos] = useState<number>(0);
    const [isSmoothScrollSupported, setIsSmoothScrollSupported] = useState(
        true
    );

    const outQuad = (n: number) => {
        return n * (2 - n);
    };

    useEffect(() => {
        setIsSmoothScrollSupported(
            'scrollBehavior' in document.documentElement.style
        );
    }, []);

    useEffect(() => {
        if (activeElement) {
            window.setTimeout(() => {
                if (isSmoothScrollSupported) {
                    activeElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                } else {
                    setTargetPos(activeElement.getBoundingClientRect().top);
                }
            }, delay || 0);
        }
    }, [activeElement, delay, isSmoothScrollSupported]);

    useEffect(() => {
        if (isSmoothScrollSupported) return;

        const animate = (timestamp: number) => {
            if (startTime.current === -1) {
                startTime.current = timestamp || new Date().getTime();
            }

            const elapsed = timestamp - startTime.current;
            const progress = elapsed / duration;
            const easeProgress = +outQuad(progress).toFixed(2);

            const newPos =
                targetPos === 0
                    ? firstPos.current - firstPos.current * easeProgress
                    : firstPos.current + targetPos * easeProgress;

            // scroll to new position
            window.scrollTo(0, newPos);

            if (
                (targetPos > 0 && newPos >= firstPos.current + targetPos) ||
                (targetPos < 0 && newPos <= firstPos.current + targetPos) ||
                (targetPos === 0 && newPos <= 0)
            ) {
                cancelAnimationFrame(startTime.current);
                startTime.current = -1;
            } else {
                window.requestAnimationFrame(animate);
            }
        };

        cancelAnimationFrame(startTime.current);
        startTime.current = -1;
        firstPos.current =
            window.pageYOffset || document.documentElement.scrollTop;
        window.requestAnimationFrame(animate);
    }, [duration, isSmoothScrollSupported, targetPos]);

    return {
        setActiveElement,
    };
};
