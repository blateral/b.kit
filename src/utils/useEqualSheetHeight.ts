import { useEffect, useState, MutableRefObject, createRef } from 'react';
import { useMediaQuery } from './useMediaQuery';

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

export const useEqualSheetHeight = (props: {
    listLength: number;
    identifiers: string[];
    responsive?: ItemsPerRow;
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

    const [sheetRefs, setSheetRefs] = useState<
        MutableRefObject<HTMLDivElement>[]
    >([]);

    const makeRows = (
        result: Array<number>[],
        _: number,
        index: number,
        arr: number[]
    ) => {
        // make new row after 3 items
        if (index % itemsPerRow === 0)
            result.push(arr.slice(index, index + itemsPerRow) as Array<number>);
        return result;
    };

    const setHeights = (
        heights: (number | null)[],
        selector: string,
        refs: MutableRefObject<HTMLDivElement>[]
    ) => {
        const x = heights.reduce(makeRows, []);

        x.forEach((rowHeights, y) => {
            const highest = rowHeights.slice().sort((vA, vB) => {
                if (vA && vB) {
                    if (vA > vB) return -1;
                    return 1;
                } else return 0;
            })[0];

            // set height of all items in row to the highest value
            if (rowHeights.length > 1 && highest) {
                for (let x = 0; x < rowHeights.length; x++) {
                    const index = x + y * rowHeights.length;
                    const el = refs[index].current.querySelector(selector);

                    if (el) {
                        el.setAttribute('style', `height: ${highest}px`);
                    }
                }
            }
        });
    };

    const resize = (refs: MutableRefObject<HTMLDivElement>[]) => () => {
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
                element?.removeAttribute('style');

                const prevHeights = identifierSizes.get(id);
                if (prevHeights)
                    identifierSizes.set(id, [
                        ...prevHeights,
                        element ? element.scrollHeight : null,
                    ]);
            });
        });

        // set heights for each identifier
        identifierSizes.forEach((value, key) => {
            setHeights(value, key, refs);
        });
    };

    useEffect(() => {
        const resizeHandler = resize(sheetRefs);
        resizeHandler();

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [sheetRefs, currentMq]);

    useEffect(() => {
        setSheetRefs((ref) =>
            Array(props.listLength)
                .fill(null)
                .map((_, i) => sheetRefs[i] || createRef())
        );
    }, [props.listLength]);

    return sheetRefs;
};
