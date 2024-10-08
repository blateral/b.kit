import { POICardProps } from 'components/blocks/POICard';
import { isValidArray } from 'hooks';
import { escapeRegExp } from 'utils/escape';

export type POIData = Pick<
    POICardProps,
    'name' | 'facts' | 'infos' | 'shortDescription'
> & { id: string };

export interface FilterMatch {
    item: POIData;
    priority: number;
}

const poiExactNameFilter =
    <T extends POIData>(filterQuery: string) =>
    (value: T) => {
        const regex = new RegExp(filterQuery);
        return regex.test(value.name);
    };

const poiSoftNameFilter =
    <T extends POIData>(filterQuery: string) =>
    (value: T) => {
        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const preparedName = value.name.toLowerCase().replace(/\s/g, '');

        const regex = new RegExp(preparedQuery);
        return regex.test(preparedName);
    };

const poiFactFilter =
    (filterQuery: string) =>
    <T extends POIData>(value: T) => {
        if (!isValidArray(value.facts, false)) return false;

        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const regex = new RegExp(preparedQuery);

        const result = value.facts.find((fact) => {
            const preparedFact = fact.toLowerCase().replace(/\s/g, '');
            return regex.test(preparedFact);
        });

        return !!result;
    };

const poiInfoFilter =
    (filterQuery: string) =>
    <T extends POIData>(value: T) => {
        if (!isValidArray(value?.infos, false)) return false;

        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const regex = new RegExp(preparedQuery);

        return !!value.infos.find((info) => {
            if (!info.text) return false;
            const preparedText = info.text.toLowerCase().replace(/\s/g, '');
            return regex.test(preparedText);
        });
    };

const poiDescriptionFilter =
    (filterQuery: string) =>
    <T extends POIData>(value: T) => {
        if (!value.shortDescription) return false;

        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const preparedDesc = value.shortDescription
            .toLowerCase()
            .replace(/\s/g, '');

        const regex = new RegExp(preparedQuery);
        return regex.test(preparedDesc);
    };

const removeMatchIntersections = <T extends POIData>(
    array: FilterMatch[],
    item?: T[]
) => {
    if (!item) return [];
    return item?.filter(
        (m) => !array.find((prioItem) => prioItem.item.id === m.id)
    );
};

const filterPois = <T extends POIData>(filterQuery: string, pois: T[]) => {
    const prioList: FilterMatch[] = [];
    if (
        !isValidArray(
            pois?.filter((poi) => poi.id !== undefined),
            false
        )
    ) {
        return prioList;
    }

    // PRIO 1 Filter: Exact name
    const exactNameMatches = pois?.filter(poiExactNameFilter(filterQuery));
    if (isValidArray(exactNameMatches, false)) {
        prioList.push(
            ...exactNameMatches.map((match) => ({
                item: match,
                priority: 1,
            }))
        );
    }

    // PRIO 2 Filter: Name
    const nameMatches = removeMatchIntersections(
        prioList,
        pois?.filter(poiSoftNameFilter(filterQuery))
    );

    if (isValidArray(nameMatches, false)) {
        prioList.push(
            ...nameMatches.map((match) => ({
                item: match,
                priority: 2,
            }))
        );
    }

    // PRIO 3 Filter: Facts
    const factMatches = removeMatchIntersections(
        prioList,
        pois?.filter(poiFactFilter(filterQuery))
    );

    if (isValidArray(factMatches, false)) {
        prioList.push(
            ...factMatches.map((match) => ({
                item: match,
                priority: 3,
            }))
        );
    }

    // PRIO 4 Filter: Description
    const infoMatches = removeMatchIntersections(
        prioList,
        pois?.filter(poiInfoFilter(filterQuery))
    );

    if (isValidArray(infoMatches, false)) {
        prioList.push(
            ...infoMatches.map((match) => ({
                item: match,
                priority: 4,
            }))
        );
    }

    // PRIO 5 Filter: Description
    const descMatches = removeMatchIntersections(
        prioList,
        pois?.filter(poiDescriptionFilter(filterQuery))
    );

    if (isValidArray(descMatches, false)) {
        prioList.push(
            ...descMatches.map((match) => ({
                item: match,
                priority: 5,
            }))
        );
    }

    return prioList;
};

export const getFilterMatches = <T extends POIData>(
    filterQuery: string,
    items: T[]
) => {
    const queryParts = filterQuery.split(' ').map((part) => part.trim());
    const searchMatches: Array<{
        match: FilterMatch;
        intersections: number;
    }> = [];

    // tracking matches of each query part
    for (const part of queryParts) {
        const matches = filterPois(escapeRegExp(part), items || []);

        for (const match of matches) {
            const intersectionIndex = searchMatches.findIndex(
                (sItem) => sItem.match.item.id === match.item.id
            );

            if (intersectionIndex !== -1) {
                searchMatches[intersectionIndex].intersections += 1;
            } else {
                searchMatches.push({
                    match,
                    intersections: 1,
                });
            }
        }
    }

    // filter search matches by intersections so only matches with results for all search parts are shown
    return searchMatches
        .filter((m) => m.intersections >= queryParts.length)
        .map<FilterMatch>((m) => ({
            ...m.match,
        }));
};
