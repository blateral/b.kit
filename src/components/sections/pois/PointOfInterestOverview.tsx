import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { Info } from 'components/blocks/InfoList';
import POICard, { POICardProps } from 'components/blocks/POICard';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { isValidArray } from 'utils/arrays';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { mq, spacings, getColors as color } from 'utils/styles';
import { deleteUrlParam, setUrlParam } from 'utils/urlParams';
import { FilterState } from 'components/blocks/FilterBar';
import { getFilterMatches } from './filters';
import * as PoiPartials from 'components/sections/pois/partials';

const POISection = styled(Section)`
    overflow: visible;
`;

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

const PoiOverviewFilterBar = styled(PoiPartials.PoiFilterBar)`
    // margin to show prevent section overflow outline
    margin-top: 2px;
    border: solid 1px
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};

    &:not(:last-child) {
        margin-bottom: ${spacings.nudge * 5}px;
    }

    @media ${mq.medium} {
        border: none;
    }
`;

interface CardProps extends POICardProps {
    id: string;
    infos?: Array<Info & { allowFiltering?: boolean }>;
}

export type PointOfInterestOverviewItem = Omit<CardProps, 'isInverted'>;

export interface PoiOverviewFilters {
    toggleLabel?: string;
    mobileSubmitLabel?: string;
    categoryFilter?: {
        label?: string;
        resetLabel?: string;
    };
    textFilter?: {
        placeholder?: string;
        icon?: (isInverted?: boolean) => React.ReactNode;
        submitIcon?: (isInverted?: boolean) => React.ReactNode;
        clearIcon?: (isInverted?: boolean) => React.ReactNode;
    };
    closeIcon?: (isInverted?: boolean) => React.ReactNode;
    filterIcon?: (isInverted?: boolean) => React.ReactNode;
    indicator?: (props: {
        isOpen: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
}

const PointOfInterestOverview: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of POI card settings */
    pois?: PointOfInterestOverviewItem[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Initial POI filter states */
    initialPoiFilters?: FilterState;

    /** POI filter settings */
    poiFilters?: PoiOverviewFilters;
    customPoiFilters?: (props: {
        pois: PointOfInterestOverviewItem[];
        filters: FilterState;
        setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
        settings?: PoiOverviewFilters;
    }) => React.ReactNode;
}> = ({
    anchorId,
    bgMode,
    pois,
    initialPoiFilters,
    poiFilters,
    customPoiFilters,
}) => {
    const { colors, globals } = useLibTheme();
    const filterName = globals.sections.poiFilterName;
    const factFiltername = globals.sections.poiFactFilterName;

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [filters, setFilters] = useState<FilterState>(
        initialPoiFilters || {
            categoryFilter: [],
            textFilter: '',
        }
    );

    const categories = useMemo(() => {
        return pois?.reduce<string[]>((acc, poi) => {
            const newCategories = [...acc];

            for (const fact of poi.facts || []) {
                if (!newCategories.includes(fact)) {
                    newCategories.push(fact);
                }
            }

            return newCategories;
        }, []);
    }, [pois]);

    const poiMatches = useMemo(() => {
        const matches =
            getFilterMatches<PointOfInterestOverviewItem>(
                filters?.textFilter || '',
                filters?.categoryFilter || [],
                pois || []
            ) || pois;

        return Array.from(matches).map((m) => m[1]);
    }, [filters?.textFilter, filters?.categoryFilter, pois]);

    useEffect(() => {
        if (filters.textFilter) {
            setUrlParam(filterName, filters.textFilter);
        } else {
            deleteUrlParam(filterName);
        }

        if (isValidArray(filters.categoryFilter, false)) {
            setUrlParam(factFiltername, filters.categoryFilter.join(','));
        } else {
            deleteUrlParam(factFiltername);
        }
    }, [
        filterName,
        factFiltername,
        filters.textFilter,
        filters.categoryFilter,
    ]);

    return (
        <POISection
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
                {poiFilters ? (
                    customPoiFilters ? (
                        customPoiFilters?.({
                            filters,
                            setFilters,
                            pois: pois || [],
                            settings: poiFilters,
                        })
                    ) : (
                        <PoiOverviewFilterBar
                            hasBorders
                            value={filters}
                            onChange={setFilters}
                            textFilter={poiFilters?.textFilter || undefined}
                            categoryFilter={
                                poiFilters?.categoryFilter
                                    ? {
                                          ...poiFilters.categoryFilter,
                                          items: categories?.map(
                                              (cat) =>
                                                  ({
                                                      value: cat,
                                                      label: cat,
                                                  } || [])
                                          ),
                                      }
                                    : undefined
                            }
                            mobileSubmitLabel={poiFilters?.mobileSubmitLabel}
                            closeIcon={poiFilters?.closeIcon}
                            toggleLabel={poiFilters?.toggleLabel}
                            filterIcon={poiFilters?.filterIcon}
                            indicator={poiFilters?.indicator}
                            isInverted={isInverted}
                        />
                    )
                ) : null}
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
        </POISection>
    );
};

export const PointOfInterestOverviewComponent = PointOfInterestOverview;
export default withLibTheme(PointOfInterestOverview);
