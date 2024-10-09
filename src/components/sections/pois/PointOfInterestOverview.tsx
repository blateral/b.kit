import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { Info } from 'components/blocks/InfoList';
import POICard, { POICardProps } from 'components/blocks/POICard';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { isValidArray } from 'utils/arrays';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { mq, spacings } from 'utils/styles';
import { deleteUrlParam, setUrlParam } from 'utils/urlParams';
import { FilterState } from 'components/blocks/FilterBar';
import { getFilterMatches } from './filters';
import { PoiPartials } from 'sections.pois';

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

    &:not(:last-child) {
        margin-bottom: ${spacings.nudge * 5}px;
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
    poiFilters?:
        | PoiOverviewFilters
        | ((props: {
              pois: PointOfInterestOverviewItem[];
              filters: FilterState;
              setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
          }) => React.ReactNode);
}> = ({ anchorId, bgMode, pois, initialPoiFilters, poiFilters }) => {
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

    const poiMatches = useMemo(() => {
        const matches =
            getFilterMatches<PointOfInterestOverviewItem>(
                filters?.textFilter || '',
                filters?.categoryFilter || [],
                pois || []
            ) || pois;

        return Array.from(matches).map((m) => m[1]);
    }, [pois, filters]);

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
                {poiFilters ? (
                    typeof poiFilters === 'function' ? (
                        poiFilters?.({
                            filters,
                            setFilters,
                            pois: pois || [],
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
                                          items: pois?.map(
                                              (poi) =>
                                                  ({
                                                      value: poi.id,
                                                      label: poi.name,
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
        </Section>
    );
};

export const PointOfInterestOverviewComponent = PointOfInterestOverview;
export default withLibTheme(PointOfInterestOverview);
