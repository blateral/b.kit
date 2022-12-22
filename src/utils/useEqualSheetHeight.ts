import {
    useEffect,
    useState,
    MutableRefObject,
    createRef,
    useCallback,
} from 'react';
import { useMediaQuery } from './useMediaQuery';
import { useFontsLoaded } from 'utils/useFontsLoaded';
import useResizeThrottle from './useResizeThrottle';

interface ItemsPerRow {
    small?: number;
    medium?: number;
    semilarge?: number;
    large?: number;
    xlarge?: number;
}

type Mq = keyof ItemsPerRow;

// ********************
// useEqualSheetHeight
// ********************

export const useEqualSheetHeight = <T extends HTMLElement>(props: {
    listLength: number;
    identifiers: string[];
    responsive?: ItemsPerRow;
    /** Throttle timeout for resize events. Default: 400ms */
    resizeThrottleTimeout?: number;
}) => {
    const defaultResponsive = {
        small: 1,
        medium: 1,
        semilarge: 2,
        large: 3,
        xlarge: 3,
        ...props.responsive,
    };
    const mqs: Mq[] = ['small', 'medium', 'semilarge', 'large', 'xlarge'];
    const currentMq = useMediaQuery(mqs) as Mq | undefined;
    const itemsPerRow = currentMq
        ? defaultResponsive[currentMq]
        : defaultResponsive.small;

    const [sheetRefs, setSheetRefs] = useState<MutableRefObject<T>[]>([]);
    const fontsLoaded = useFontsLoaded();

    const setHeights = useCallback(
        (
            heights: (number | null)[],
            selector: string,
            refs: MutableRefObject<T>[]
        ) => {
            const makeRows = (
                result: Array<number | null>[],
                _: number,
                index: number,
                arr: Array<number | null>
            ) => {
                // make new row after 3 items
                if (index % itemsPerRow === 0) {
                    result.push(
                        arr.slice(index, index + itemsPerRow) as Array<number>
                    );
                }
                return result;
            };

            // put item heights in 2-dimensional array to sort them in rows
            const heightsInRows = heights.reduce(makeRows, []);

            heightsInRows.forEach((rowHeights, y) => {
                const validHeights = rowHeights.filter(
                    (height) => height !== null
                ) as number[];

                const highest = validHeights.slice().sort((vA, vB) => {
                    if (vA && vB) {
                        if (vA > vB) return -1;
                        return 1;
                    } else return 0;
                })[0];

                // set height of all items in row to the highest value
                if (rowHeights.length > 1 && highest) {
                    for (let x = 0; x < rowHeights.length; x++) {
                        const index = x + y * itemsPerRow;
                        const el = refs[index].current.querySelector(selector);

                        el?.setAttribute('style', `height: ${highest}px`);
                    }
                }
            });
        },
        [itemsPerRow]
    );

    // Throttle viewport resize event for performance
    const resizeState = useResizeThrottle(
        props.resizeThrottleTimeout !== undefined
            ? props.resizeThrottleTimeout
            : 400
    );

    useEffect(() => {
        const resize = (refs: MutableRefObject<T>[]) => () => {
            const identifierSizes = new Map<string, Array<number | null>>();

            // create identifier map
            for (let i = 0; i < props.identifiers.length; i++) {
                identifierSizes.set(props.identifiers[i], []);
            }

            // set height values
            refs.filter((ref) => ref.current).forEach(({ current }) => {
                // get height for each element
                props.identifiers.forEach((id) => {
                    const element = current.querySelector(id);
                    const prevHeights = identifierSizes.get(id);
                    let height: number | null = null;

                    if (element) {
                        element.removeAttribute('style');
                        height = element.getBoundingClientRect().height;
                    }

                    if (prevHeights) {
                        identifierSizes.set(id, [...prevHeights, height]);
                    }
                });
            });

            // set heights for each identifier
            identifierSizes.forEach((value, key) => {
                setHeights(value, key, refs);
            });
        };

        const resizeHandler = resize(sheetRefs);
        resizeHandler();
    }, [props.identifiers, resizeState, setHeights, sheetRefs, fontsLoaded]);

    const triggerCalculation = useCallback(() => {
        setSheetRefs((prev) =>
            Array(props.listLength)
                .fill(null)
                .map((_, i) => prev[i] || createRef())
        );
    }, [props.listLength]);

    useEffect(() => {
        setSheetRefs((prev) =>
            Array(props.listLength)
                .fill(null)
                .map((_, i) => prev[i] || createRef())
        );
    }, [props.listLength]);

    return {
        sheetRefs,
        triggerCalculation,
    };
};
