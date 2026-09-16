import { useCallback } from 'react';

export type MessageType = 'NAVIGATION_STATE';

export interface Message<TData = Record<string, any> | string | number> {
    type: MessageType;
    data: TData;
}

const useMessage = <TData = Record<string, any> | string | number>() => {
    const send = useCallback((type: MessageType, data: TData) => {
        window.postMessage({ type, data });
    }, []);

    const listen = useCallback(
        (type: MessageType, callback: (message: Message<TData>) => void) => {
            const handler = (ev: MessageEvent) => {
                if (!ev.data || typeof ev.data !== 'object') return;

                if (ev.data.type === type) {
                    callback({
                        type,
                        data: ev.data.data as TData,
                    });
                }
            };

            window.addEventListener('message', handler);

            return () => {
                window.removeEventListener('message', handler);
            };
        },
        []
    );

    return { send, listen };
};

export default useMessage;
