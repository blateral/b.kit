import { useState, useEffect } from 'react';

const useTouch = () => {
    const [canTouch, setCanTouch] = useState(false);

    useEffect(() => {
        setCanTouch(
            'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
        );
    }, []);
    return canTouch;
};

export default useTouch;
