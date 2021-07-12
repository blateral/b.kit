import { useEffect, useRef, useState } from 'react';

export const useScrollTo = (fallbackScrollDuration: number) => {
    const startTime = useRef<number>(-1);
    const firstPos = useRef<number>(0);
    const [targetPos, setTargetPos] = useState<number | undefined>(undefined);

    const outQuad = (n: number) => {
        return n * (2 - n);
    };

    useEffect(() => {
        if (targetPos === undefined) return;
        if ('scrollBehavior' in document.documentElement.style) {
            window.scroll({
                top: targetPos,
                left: 0,
                behavior: 'smooth',
            });
            setTargetPos(undefined);
        } else {
            const animate = (timestamp: number) => {
                if (startTime.current === -1) {
                    startTime.current = timestamp || new Date().getTime();
                }

                const elapsed = timestamp - startTime.current;
                const progress = elapsed / fallbackScrollDuration;
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
                    setTargetPos(undefined);
                } else {
                    window.requestAnimationFrame(animate);
                }
            };

            cancelAnimationFrame(startTime.current);
            startTime.current = -1;
            firstPos.current =
                window.pageYOffset || document.documentElement.scrollTop;
            window.requestAnimationFrame(animate);
        }
    }, [targetPos, fallbackScrollDuration]);

    return setTargetPos;
};
