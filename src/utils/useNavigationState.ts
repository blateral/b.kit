import { useEffect, useRef, useState } from 'react';
import useMessage from 'utils/useMessage';
import type { MessageNavigationState } from 'components/sections/navigation/Navigation';

export const useNavigationState = (initialState?: MessageNavigationState) => {
    const lastNavState = useRef<MessageNavigationState | null>(
        initialState || null
    );
    const [navState, setNavState] = useState<MessageNavigationState | null>(
        initialState || null
    );
    const { listen } = useMessage<MessageNavigationState>();

    useEffect(() => {
        const unsubscribe = listen('NAVIGATION_STATE', (message) => {
            if (
                JSON.stringify(lastNavState.current) !==
                JSON.stringify(message.data)
            ) {
                lastNavState.current = message.data;
                setNavState(message.data);
            }
        });

        return unsubscribe;
    }, [listen]);

    return navState;
};
