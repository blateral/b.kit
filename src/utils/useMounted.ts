import { useEffect, useRef } from 'react';

const useMounted = () => {
    const isMountedRef = useRef<boolean>(false);

    useEffect(() => {
        isMountedRef.current = true;
    }, []);

    return isMountedRef.current;
};

export default useMounted;
