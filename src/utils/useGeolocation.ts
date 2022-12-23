import { useCallback, useEffect, useRef, useState } from 'react';

const useGeolocation = (enableHighAccuracy = true, autostart = true) => {
    const [isSupported, setIsSupported] = useState<boolean>();
    const [isEnabled, setIsEnabled] = useState<boolean>();
    const [location, setLocation] = useState<GeolocationPosition>();
    const [error, setError] = useState<GeolocationPositionError>();
    const watchRef = useRef<number | null>();

    useEffect(() => {
        setIsSupported('geolocation' in navigator);
    }, []);

    const cancel = useCallback(() => {
        setIsEnabled(false);
        if (watchRef.current) {
            navigator.geolocation.clearWatch(watchRef.current);
        }
    }, []);

    useEffect(() => {
        if (!autostart || !('geolocation' in navigator)) {
            return;
        }

        cancel();
        navigator.geolocation.watchPosition(handleSuccess, handleError, {
            enableHighAccuracy,
        });
        setIsEnabled(true);
        const watch = watchRef.current;

        return () => {
            if (watch) {
                setIsEnabled(false);
                navigator.geolocation.clearWatch(watch);
            }
        };
    }, [autostart, cancel, enableHighAccuracy]);

    const reset = useCallback(() => {
        return new Promise<GeolocationPosition>((resolve, reject) => {
            cancel();
            setIsEnabled(false);
            navigator.geolocation.watchPosition(
                (position) => {
                    handleSuccess(position);
                    resolve(position);
                },
                (err) => {
                    handleError(err);
                    reject(err);
                },
                {
                    enableHighAccuracy,
                }
            );
            setIsEnabled(true);
        });
    }, [cancel, enableHighAccuracy]);

    const handleSuccess = (position: GeolocationPosition) => {
        setLocation(position);
    };

    const handleError = (error: GeolocationPositionError) => {
        setIsEnabled(false);
        console.log(error);

        setError(error);
    };

    return { isSupported, isEnabled, location, error, reset, cancel };
};

export default useGeolocation;
