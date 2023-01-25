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

export type JobItem = Omit<
    JobCardProps,
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

const jobLocationRegionFilter = (filterQuery: string) => (value: JobItem) => {
    if (!isValidArray(value.locations, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    const result = value.locations.find((location) => {
        const preparedAddressRegion = location.addressRegion
            ?.toLowerCase()
            .replace(/\s/g, '');
        ('');

        return regex.test(preparedAddressRegion || '');
    });

    return !!result;
};

const jobLocationCountryFilter = (filterQuery: string) => (value: JobItem) => {
    if (!isValidArray(value.locations, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    const result = value.locations.find((location) => {
        const preparedCountry = location.addressCountry
            ?.toLowerCase()
            .replace(/\s/g, '');

        return regex.test(preparedCountry || '');
    });

    return !!result;
};

const jobLocationPostalFilter = (filterQuery: string) => (value: JobItem) => {
    if (!isValidArray(value.locations, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    const result = value.locations.find((location) => {
        const preparedPostal = location.postalCode
            ?.toLowerCase()
            .replace(/\s/g, '');

        return regex.test(preparedPostal || '');
    });

    return !!result;
};

const jobLocationStreetAddressFilter =
    (filterQuery: string) => (value: JobItem) => {
        if (!isValidArray(value.locations, false)) return false;

        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const regex = new RegExp(preparedQuery);

        const result = value.locations.find((location) => {
            const preparedStreetAddress = location.streetAddress
                ?.toLowerCase()
                .replace(/\s/g, '');

            return regex.test(preparedStreetAddress || '');
        });

        return !!result;
    };

const jobLocationLocalityFilter = (filterQuery: string) => (value: JobItem) => {
    if (!isValidArray(value.locations, false)) return false;

    const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(preparedQuery);

    const result = value.locations.find((location) => {
        const preparedLocality = location.addressLocality
            ?.toLowerCase()
            .replace(/\s/g, '');

        return regex.test(preparedLocality || '');
    });

    return !!result;
};

const jobLocationDescriptionFilter =
    (filterQuery: string) => (value: JobItem) => {
        if (!isValidArray(value.locations, false)) return false;

        const preparedQuery = filterQuery.toLowerCase().replace(/\s/g, '');
        const regex = new RegExp(preparedQuery);

        const result = value.locations.find((location) => {
            const perparedDescription = location.description
                ?.toLowerCase()
                .replace(/\s/g, '');

            return regex.test(perparedDescription || '');
        });

        return !!result;
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

interface FilterMatch {
    item: JobItem;
}

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

    placeholder?: string;
}> = ({
    anchorId,
    jobs,
    bgMode,
    modelIcon,
    locationIcon,
    totalJobLocations,
    allJobLocationsLabel,
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

    const filteredJobs: FilterMatch[] = React.useMemo(() => {
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
        const nameMatches = jobs?.filter(jobSoftTitleFilter(filterQuery));
        if (isValidArray(nameMatches, false)) {
            prioList.push(
                ...nameMatches.map((match) => ({
                    item: match,
                    priority: 2,
                }))
            );
        }

        // PRIO 3 Filter: Location
        const regionMatches = jobs?.filter(
            jobLocationRegionFilter(filterQuery)
        );
        if (isValidArray(regionMatches, false)) {
            prioList.push(
                ...regionMatches.map((match) => ({
                    item: match,
                    priority: 3,
                }))
            );
        }

        const countryMatches = jobs?.filter(
            jobLocationCountryFilter(filterQuery)
        );
        if (isValidArray(countryMatches, false)) {
            prioList.push(
                ...countryMatches.map((match) => ({
                    item: match,
                    priority: 3,
                }))
            );
        }

        const postalMatches = jobs?.filter(
            jobLocationPostalFilter(filterQuery)
        );
        if (isValidArray(postalMatches, false)) {
            prioList.push(
                ...postalMatches.map((match) => ({
                    item: match,
                    priority: 3,
                }))
            );
        }

        const locationNameMatches = jobs?.filter(
            jobLocationNameFilter(filterQuery)
        );
        if (isValidArray(locationNameMatches, false)) {
            prioList.push(
                ...locationNameMatches.map((match) => ({
                    item: match,
                    priority: 3,
                }))
            );
        }

        const localityMatches = jobs?.filter(
            jobLocationLocalityFilter(filterQuery)
        );
        if (isValidArray(localityMatches, false)) {
            prioList.push(
                ...localityMatches.map((match) => ({
                    item: match,
                    priority: 3,
                }))
            );
        }

        const addressMatches = jobs?.filter(
            jobLocationStreetAddressFilter(filterQuery)
        );
        if (isValidArray(addressMatches, false)) {
            prioList.push(
                ...addressMatches.map((match) => ({
                    item: match,
                    priority: 3,
                }))
            );
        }

        const descriptionMatches = jobs?.filter(
            jobLocationDescriptionFilter(filterQuery)
        );
        if (isValidArray(descriptionMatches, false)) {
            prioList.push(
                ...descriptionMatches.map((match) => ({
                    item: match,
                    priority: 3,
                }))
            );
        }

        // PRIO 4 Filter: Types
        const typeMatches = jobs?.filter(jobTypesFilter(filterQuery));
        if (isValidArray(typeMatches, false)) {
            prioList.push(
                ...typeMatches.map((match) => ({
                    item: match,
                    priority: 4,
                }))
            );
        }

        return prioList;
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
                <Filter
                    placeholder="Suche"
                    value={filterQuery}
                    onSubmit={setFilterQuery}
                />
                <List>
                    {filteredJobs?.map((job, i) => (
                        <Item key={i}>
                            <JobCard
                                ref={cardRefs[i]}
                                {...job.item}
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
