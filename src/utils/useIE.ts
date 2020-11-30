import { useState, useEffect } from 'react';

const useIE = (initialValue?: boolean) => {
    const [isIE, setIE] = useState(initialValue || false);

    useEffect(() => {
        setIE((document.body.style as any).msTouchAction !== undefined);
    }, []);
    return isIE;
};

export default useIE;
