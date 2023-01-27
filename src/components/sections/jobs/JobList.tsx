import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import JobCard, { JobCardProps } from 'components/blocks/JobCard';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { mq, spacings } from 'utils/styles';
import FilterField from 'components/fields/FilterField';
import { isValidArray } from 'utils/arrays';
import useUpdateEffect from 'utils/useUpdateEffect';
import useParams from 'utils/useParams';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;

    margin-top: -${spacings.nudge * 2}px;
    margin-left: -${spacings.nudge * 2}px;

    @media ${mq.medium} {
        margin-top: -${spacings.spacer}px;
        margin-left: -${spacings.spacer}px;
    }
`;

const Item = styled.li`
    flex: 0 1 100%;
    max-width: 100%;
    margin: 0;

    padding-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        flex: 0 1 50%;
        max-width: 50%;

        padding-top: ${spacings.spacer}px;
        padding-left: ${spacings.spacer}px;
    }

    @media ${mq.large} {
        flex: 0 1 33.33%;
        max-width: 33.33%;
    }
`;

const Filter = styled(FilterField)`
    margin-bottom: ${spacings.nudge * 5}px;

    min-width: 50%;
`;

export interface CardProps extends JobCardProps {
    id: string;
}

export type JobItem = Omit<
    CardProps,
    | 'isInverted'
    | 'hasBackground'
    | 'modelIcon'
    | 'locationIcon'
    | 'totalLocations'
    | 'allLocationsLabel'
>;

const jobExactTitleFilter = (filterQuery: string) => (value: JobItem) => {
    const regex = new RegExp(filterQuery);
    return regex.test(value.jobTitle);
};

const jobSoftTitleFilter = (filterQuery: string) => (value: JobItem) => {
    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const perparedJobTitle = value.jobTitle.toLowerCase().replace(/\s/g, '');

    const regex = new RegExp(preparedQuery);
    return regex.test(perparedJobTitle);
};

const jobLocationNameFilter = (filterQuery: string) => (value: JobItem) => {
    if (!isValidArray(value.locations, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    const result = value.locations.find((location) => {
        const preparedName = location.name?.toLowerCase().replace(/\s/g, '');

        return regex.test(preparedName || '');
    });

    return !!result;
};

const jobTypesFilter = (filterQuery: string) => (value: JobItem) => {
    if (!isValidArray(value?.employmentTypes, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    return !!value.employmentTypes.find((type) => {
        if (!type.name) return false;
        const preparedText = type.name.toLowerCase().replace(/\s/g, '');
        return regex.test(preparedText);
    });
};

const removeMatchIntersections = (array: FilterMatch[], item?: JobItem[]) => {
    if (!item) return [];
    return item?.filter(
        (m) => !array.find((prioItem) => prioItem.item.id === m.id)
    );
};

interface FilterMatch {
    item: JobItem;
    priority: number;
}

const filterJobs = (filterQuery: string, jobs: JobItem[]) => {
    const prioList: FilterMatch[] = [];
    if (
        !isValidArray(
            jobs?.filter((job) => job.jobTitle !== undefined),
            false
        )
    ) {
        return prioList;
    }

    // PRIO 1 Filter: Exact name
    const exactNameMatches = jobs?.filter(jobExactTitleFilter(filterQuery));
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
        jobs?.filter(jobSoftTitleFilter(filterQuery))
    );
    if (isValidArray(nameMatches, false)) {
        prioList.push(
            ...nameMatches.map((match) => ({
                item: match,
                priority: 2,
            }))
        );
    }

    // PRIO 3 Filter: Location
    const locationNameMatches = removeMatchIntersections(
        prioList,
        jobs?.filter(jobLocationNameFilter(filterQuery))
    );
    if (isValidArray(locationNameMatches, false)) {
        prioList.push(
            ...locationNameMatches.map((match) => ({
                item: match,
                priority: 3,
            }))
        );
    }

    // PRIO 4 Filter: Job Type
    const typeMatches = removeMatchIntersections(
        prioList,
        jobs?.filter(jobTypesFilter(filterQuery))
    );

    if (isValidArray(typeMatches, false)) {
        prioList.push(
            ...typeMatches.map((match) => ({
                item: match,
                priority: 4,
            }))
        );
    }

    return prioList;
};

const JobList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of job item settings */
    jobs?: JobItem[];

    /** Total amount all locations */
    totalJobLocations?: number;

    /** Label to show if all location selected */
    allJobLocationsLabel?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Injection function for job time model icon */
    modelIcon?: () => React.ReactNode;

    /** Injection function for job location icon */
    locationIcon?: () => React.ReactNode;

    /** Filter placeholder */
    filterPlaceholder?: string;

    /** Show filter input field */
    hasFilter?: boolean;
}> = ({
    anchorId,
    jobs,
    bgMode,
    modelIcon,
    locationIcon,
    totalJobLocations,
    allJobLocationsLabel,
    filterPlaceholder,
    hasFilter,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const jobCount = jobs?.length || 0;

    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
        listLength: jobCount,
        identifiers: ['[data-sheet="title"]', '[data-sheet="info"]'],
        responsive: {
            small: 1,
            semilarge: 2,
            large: 3,
        },
    });

    const [filterQuery, setFilterQuery] = React.useState<string>('');

    const jobMatches: FilterMatch[] = React.useMemo(() => {
        const queryParts = filterQuery.split(' ').map((part) => part.trim());
        const searchMatches: Array<{
            match: FilterMatch;
            intersections: number;
        }> = [];

        // tracking matches of each query part
        for (const part of queryParts) {
            const matches = filterJobs(part, jobs || []);

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
    }, [filterQuery, jobs]);

    const { params, update } = useParams();

    React.useEffect(() => {
        setFilterQuery(params['filter'] || '');
    }, [params]);

    useUpdateEffect(() => {
        update('filter', filterQuery);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterQuery]);

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                {hasFilter && (
                    <Filter
                        placeholder={filterPlaceholder || 'Suche'}
                        value={filterQuery}
                        onSubmit={setFilterQuery}
                    />
                )}
                <List>
                    {jobMatches
                        ?.sort((a, b) => a.priority - b.priority)
                        .map((match, i) => (
                            <Item key={i}>
                                <JobCard
                                    ref={cardRefs[i]}
                                    {...match.item}
                                    isInverted={isInverted}
                                    hasBackground={hasBg}
                                    modelIcon={modelIcon}
                                    locationIcon={locationIcon}
                                    totalLocations={totalJobLocations}
                                    allLocationsLabel={allJobLocationsLabel}
                                />
                            </Item>
                        ))}
                </List>
            </Wrapper>
        </Section>
    );
};

export const JobListComponent = JobList;
export default withLibTheme(JobList);
