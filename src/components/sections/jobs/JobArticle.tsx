import ClockFilled from 'components/base/icons/ClockFilled';
import LocationPin from 'components/base/icons/LocationPin';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import { JobCardProps } from 'components/blocks/JobCard';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { generateJob } from 'utils/structuredData';
import { spacings } from 'utils/styles';

const ArticleHead = styled.div`
    & + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const JobInfos = styled(Copy)`
    &:not(:first-child) {
        margin-top: ${spacings.spacer}px;
    }
`;

const Info = styled.div`
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    & + & {
        margin-top: ${spacings.nudge * 3}px;
    }

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const Icon = styled.span`
    display: flex;
    align-items: center;

    & > * {
        height: 32px;
        width: 32px;
    }
`;

const MainLabel = styled.span`
    display: flex;
    align-items: center;
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.spacer}px;
`;

export interface OrganizationData {
    name?: string;
    url?: string;
    logo?: string;
    telephone?: string;
    email?: string;
    address?: {
        streetAddress?: string;
        addressLocality?: string;
        postalCode?: string;
        addressCountry?: string;
    };
}

export type JobArticleProps = Omit<
    JobCardProps,
    'isInverted' | 'hasBackground' | 'link'
> & {
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Text that describes the job (richtext) */
    description?: string;

    /** The hiring organization (important for structured data) */
    organization?: OrganizationData;

    /** The date of posting the job tender (important for structured data) */
    datePosted?: Date;

    /** Function to inject primary action */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject secondary action */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Section background */
    bgMode?: 'full' | 'inverted';
};

const JobArticle: React.FC<JobArticleProps> = ({
    anchorId,
    bgMode,
    jobTitle,
    timeModel,
    location,
    modelIcon,
    locationIcon,
    description,
    organization,
    datePosted,
    primaryAction,
    secondaryAction,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    const jsonLd = {
        jobTitle, // title
        location, // jobLocation
        jobDesc: description, // description
        organization: organization, // hiringOrganization
        directApply: primaryAction || secondaryAction ? true : false, // directApply
        timeModel, // employmentType
        datePosted, // datePosted
    };

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
            {generateJob(jsonLd)}
            <Wrapper addWhitespace>
                <ArticleHead>
                    <Heading
                        size="heading-2"
                        innerHTML={jobTitle}
                        isInverted={isInverted}
                    />
                    {(timeModel || location) && (
                        <JobInfos
                            type="copy-b"
                            data-sheet="info"
                            isInverted={isInverted}
                        >
                            {timeModel && (
                                <Info>
                                    <Icon>
                                        {modelIcon ? (
                                            modelIcon()
                                        ) : (
                                            <ClockFilled />
                                        )}
                                    </Icon>
                                    <MainLabel>{timeModel}</MainLabel>
                                </Info>
                            )}

                            {location && (
                                <Info>
                                    <Icon>
                                        {locationIcon ? (
                                            locationIcon()
                                        ) : (
                                            <LocationPin />
                                        )}
                                    </Icon>
                                    <MainLabel>{location}</MainLabel>
                                </Info>
                            )}
                        </JobInfos>
                    )}
                </ArticleHead>
                {description && (
                    <Copy innerHTML={description} isInverted={isInverted} />
                )}
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export const JobArticleComponent = JobArticle;
export default withLibTheme(JobArticle);
