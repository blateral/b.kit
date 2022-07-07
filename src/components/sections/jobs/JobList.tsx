import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import JobCard, { JobCardProps } from 'components/blocks/JobCard';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { mq, spacings } from 'utils/styles';

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

export type JobItem = Omit<
    JobCardProps,
    | 'isInverted'
    | 'hasBackground'
    | 'modelIcon'
    | 'locationIcon'
    | 'totalLocations'
    | 'allLocationsLabel'
>;

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
                <List>
                    {jobs?.map((job, i) => (
                        <Item key={i}>
                            <JobCard
                                ref={cardRefs[i]}
                                {...job}
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
