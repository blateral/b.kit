import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { Info } from 'components/blocks/InfoList';
import POICard, { POICardProps } from 'components/blocks/POICard';
import FilterField from 'components/fields/FilterField';
import useUpdateEffect from 'utils/useUpdateEffect';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { isValidArray } from 'utils/arrays';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { mq, spacings } from 'utils/styles';
import { escapeRegExp } from 'utils/escape';
import useMounted from 'utils/useMounted';
import { deleteUrlParam, getUrlParams, setUrlParam } from 'utils/urlParams';

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 5}px;
    }

    @media ${mq.large} {
        & > * + * {
            margin-top: ${spacings.nudge * 3}px;
        }
    }
`;

const Filter = styled(FilterField)`
    // margin to show prevent section overflow outline
    margin-top: 2px;

    &:not(:last-child) {
        margin-bottom: ${spacings.nudge * 5}px;
    }
`;

const poiExactNameFilter =
    (filterQuery: string) => (value: PointOfInterestOverviewItem) => {
        const regex = new RegExp(filterQuery);
        return regex.test(value.name);
    };

const poiSoftNameFilter =
    (filterQuery: string) => (value: PointOfInterestOverviewItem) => {
        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const preparedName = value.name.toLowerCase().replace(/\s/g, '');

        const regex = new RegExp(preparedQuery);
        return regex.test(preparedName);
    };

const poiFactFilter =
    (filterQuery: string) => (value: PointOfInterestOverviewItem) => {
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
    (filterQuery: string) => (value: PointOfInterestOverviewItem) => {
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
    (filterQuery: string) => (value: PointOfInterestOverviewItem) => {
        if (!value.shortDescription) return false;

        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const preparedDesc = value.shortDescription
            .toLowerCase()
            .replace(/\s/g, '');

        const regex = new RegExp(preparedQuery);
        return regex.test(preparedDesc);
    };

const removeMatchIntersections = (
    array: FilterMatch[],
    item?: PointOfInterestOverviewItem[]
) => {
    if (!item) return [];
    return item?.filter(
        (m) => !array.find((prioItem) => prioItem.item.id === m.id)
    );
};

const filterPois = (
    filterQuery: string,
    pois: PointOfInterestOverviewItem[]
) => {
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

interface CardProps extends POICardProps {
    id: string;
    infos?: Array<Info & { allowFiltering?: boolean }>;
}

export type PointOfInterestOverviewItem = Omit<CardProps, 'isInverted'>;

interface FilterMatch {
    item: PointOfInterestOverviewItem;
    priority: number;
}

const PointOfInterestOverview: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of POI card settings */
    pois?: PointOfInterestOverviewItem[];

    /** Enable/Disable filtering */
    enableFiltering?: boolean;

    /** Placeholder for filter input */
    filterPlaceholder?: string;

    /** Injection function for filter submit icon */
    filterSubmitIcon?: (isInverted?: boolean) => React.ReactNode;

    /** Injection function for filter reset icon */
    filterClearIcon?: (isInverted?: boolean) => React.ReactNode;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({
    anchorId,
    bgMode,
    pois,
    enableFiltering,
    filterPlaceholder = 'Filter',
    filterSubmitIcon,
    filterClearIcon,
}) => {
    const { colors, globals } = useLibTheme();
    const filterName = globals.sections.poiFilterName;

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [filterQuery, setFilterQuery] = useState<string>('');
    const isMounted = useMounted();

    const poiMatches: FilterMatch[] = React.useMemo(() => {
        const queryParts = filterQuery.split(' ').map((part) => part.trim());
        const searchMatches: Array<{
            match: FilterMatch;
            intersections: number;
        }> = [];

        // tracking matches of each query part
        for (const part of queryParts) {
            const matches = filterPois(escapeRegExp(part), pois || []);

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
    }, [filterQuery, pois]);

    const getFilter = useCallback(() => {
        return getUrlParams()[filterName];
    }, [filterName]);

    useEffect(() => {
        const urlFilter = getFilter();

        if (
            urlFilter !== undefined &&
            urlFilter !== null &&
            typeof urlFilter === 'string'
        ) {
            setFilterQuery(urlFilter);
        }
    }, [getFilter]);

    useEffect(() => {
        if (isMounted) return;

        // set inital data into URL
        if (filterQuery) {
            setUrlParam(filterName, filterQuery);
        } else {
            deleteUrlParam(filterName);
        }
    }, [filterName, filterQuery, isMounted]);

    useUpdateEffect(() => {
        // set filters to URL params
        if (filterQuery) {
            setUrlParam(filterName, filterQuery);
        } else {
            deleteUrlParam(filterName);
        }
    }, [filterQuery]);

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                {enableFiltering && (
                    <Filter
                        value={filterQuery}
                        placeholder={filterPlaceholder}
                        onSubmit={setFilterQuery}
                        submitIcon={filterSubmitIcon}
                        clearIcon={filterClearIcon}
                    />
                )}
                <Content>
                    {poiMatches
                        ?.sort((a, b) => a.priority - b.priority)
                        ?.map((poi, i) => (
                            <POICard
                                key={i}
                                {...poi.item}
                                isInverted={isInverted}
                            />
                        ))}
                </Content>
            </Wrapper>
        </Section>
    );
};

export const PointOfInterestOverviewComponent = PointOfInterestOverview;
export default withLibTheme(PointOfInterestOverview);
