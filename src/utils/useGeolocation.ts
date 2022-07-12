import { useEffect, useRef, useState } from 'react';

const useGeolocation = (enableHighAccuracy = true) => {
    const [isSupported, setIsSupported] = useState<boolean>();
    const [location, setLocation] = useState<GeolocationPosition>();
    const [error, setError] = useState<GeolocationPositionError>();
    const watchRef = useRef<number | null>();

    useEffect(() => {
        setIsSupported('geolocation' in navigator);
    }, []);

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            return;
        }

        if (watchRef.current) {
            navigator.geolocation.clearWatch(watchRef.current);
        }
        navigator.geolocation.watchPosition(handleSuccess, handleError, {
            enableHighAccuracy,
        });
        const watch = watchRef.current;

        return () => {
            if (watch) {
                navigator.geolocation.clearWatch(watch);
            }
        };
    }, [enableHighAccuracy]);

    const handleSuccess = (position: GeolocationPosition) => {
        setLocation(position);
    };

    const handleError = (error: GeolocationPositionError) => {
        setError(error);
    };

    return { isSupported, location, error };
};

export default useGeolocation;
