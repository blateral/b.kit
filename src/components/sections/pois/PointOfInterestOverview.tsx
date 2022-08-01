import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { Info } from 'components/blocks/InfoList';
import POICard, { POICardProps } from 'components/blocks/POICard';
import FilterField from 'components/fields/FilterField';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { isValidArray } from 'utils/arrays';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { mq, spacings } from 'utils/styles';

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
    &:not(:last-child) {
        margin-bottom: ${spacings.nudge * 5}px;
    }
`;

const poiExactNameFilter = (filterQuery: string) => (value: IndexedPOI) => {
    const regex = new RegExp(filterQuery);
    return regex.test(value.item.name);
};

const poiSoftNameFilter = (filterQuery: string) => (value: IndexedPOI) => {
    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const preparedName = value.item.name.toLowerCase().replace(/\s/g, '');

    const regex = new RegExp(preparedQuery);
    return regex.test(preparedName);
};

const poiFactFilter = (filterQuery: string) => (value: IndexedPOI) => {
    if (!isValidArray(value.item.facts, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    const result = value.item.facts.find((fact) => {
        const preparedFact = fact.toLowerCase().replace(/\s/g, '');
        return regex.test(preparedFact);
    });

    return !!result;
};

const poiInfoFilter = (filterQuery: string) => (value: IndexedPOI) => {
    if (!isValidArray(value?.item?.infos, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    return !!value.item.infos.find((info) => {
        if (!info.text) return false;
        const preparedText = info.text.toLowerCase().replace(/\s/g, '');
        return regex.test(preparedText);
    });
};

const poiDescriptionFilter = (filterQuery: string) => (value: IndexedPOI) => {
    if (!value.item.shortDescription) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const preparedDesc = value.item.shortDescription
        .toLowerCase()
        .replace(/\s/g, '');

    const regex = new RegExp(preparedQuery);
    return regex.test(preparedDesc);
};

const removeMatchIntersections = (
    array: FilterMatch[],
    item?: IndexedPOI[]
) => {
    if (!item) return [];
    return item?.filter((m) => !array.find((prioItem) => prioItem.id === m.id));
};

interface CardProps extends POICardProps {
    infos?: Array<Info & { allowFiltering?: boolean }>;
}

export type PointOfInterestOverviewItem = Omit<CardProps, 'isInverted'>;

interface FilterMatch {
    id: number;
    item: PointOfInterestOverviewItem;
    priority: number;
}

interface IndexedPOI {
    id: number;
    item: PointOfInterestOverviewItem;
}

const PointOfInterestOverview: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of POI card settings */
    pois?: PointOfInterestOverviewItem[];

    /** Placeholder for filter input */
    filterPlaceholder?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, bgMode, pois }) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [filterQuery, setFilterQuery] = useState<string>('');

    const filteredPOIs: FilterMatch[] = useMemo(() => {
        const prioList: FilterMatch[] = [];
        if (!isValidArray(pois, false)) return prioList;

        const indexedPOIs: IndexedPOI[] = pois.map((poi, i) => ({
            id: i,
            item: poi,
        }));

        // PRIO 1 Filter: Exact name
        const exactNameMatches = indexedPOIs?.filter(
            poiExactNameFilter(filterQuery)
        );
        if (isValidArray(exactNameMatches, false)) {
            prioList.push(
                ...exactNameMatches.map((match) => ({
                    id: match.id,
                    item: match.item,
                    priority: 1,
                }))
            );
        }

        // PRIO 2 Filter: Name
        const nameMatches = removeMatchIntersections(
            prioList,
            indexedPOIs?.filter(poiSoftNameFilter(filterQuery))
        );

        if (isValidArray(nameMatches, false)) {
            prioList.push(
                ...nameMatches.map((match) => ({
                    id: match.id,
                    item: match.item,
                    priority: 2,
                }))
            );
        }

        // PRIO 3 Filter: Facts
        const factMatches = removeMatchIntersections(
            prioList,
            indexedPOIs?.filter(poiFactFilter(filterQuery))
        );

        if (isValidArray(factMatches, false)) {
            prioList.push(
                ...factMatches.map((match) => ({
                    id: match.id,
                    item: match.item,
                    priority: 3,
                }))
            );
        }

        // PRIO 4 Filter: Description
        const infoMatches = removeMatchIntersections(
            prioList,
            indexedPOIs?.filter(poiInfoFilter(filterQuery))
        );

        if (isValidArray(infoMatches, false)) {
            prioList.push(
                ...infoMatches.map((match) => ({
                    id: match.id,
                    item: match.item,
                    priority: 4,
                }))
            );
        }

        // PRIO 5 Filter: Description
        const descMatches = removeMatchIntersections(
            prioList,
            indexedPOIs?.filter(poiDescriptionFilter(filterQuery))
        );

        if (isValidArray(descMatches, false)) {
            prioList.push(
                ...descMatches.map((match) => ({
                    id: match.id,
                    item: match.item,
                    priority: 5,
                }))
            );
        }

        return prioList;
    }, [filterQuery, pois]);

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
                <Filter placeholder="Filter" onSubmit={setFilterQuery} />
                <Content>
                    {filteredPOIs
                        ?.sort((a, b) => a.priority - b.priority)
                        ?.map((poi, i) => (
                            <POICard
                                key={i}
                                {...poi.item}
                                isInverted={isInverted}
                                hasBackground={hasBg}
                            />
                        ))}
                </Content>
            </Wrapper>
        </Section>
    );
};

export const PointOfInterestOverviewComponent = PointOfInterestOverview;
export default withLibTheme(PointOfInterestOverview);
