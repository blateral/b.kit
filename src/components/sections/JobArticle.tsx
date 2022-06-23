import Clock from 'components/base/icons/Clock';
import LocationPin from 'components/base/icons/LocationPin';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import { JobCardProps } from 'components/blocks/JobCard';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import React from 'react';
import styled from 'styled-components';
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

const Icon = styled.div`
    display: flex;
    align-items: center;

    & > * {
        height: 32px;
        width: 32px;
    }
`;

const MainLabel = styled.div`
    display: flex;
    align-items: center;
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.spacer}px;
`;

const JobArticle: React.FC<
    JobCardProps & {
        jobDesc?: string;
        organization?: string;
        directApply?: boolean;
        datePosted?: string;
        primaryAction?: () => React.ReactNode;
        secondaryAction?: () => React.ReactNode;
    }
> = ({
    jobTitle,
    timeModel,
    location,
    modelIcon,
    locationIcon,
    jobDesc,
    organization,
    directApply,
    datePosted,
    primaryAction,
    secondaryAction,
}) => {
    const jsonLd = {
        jobTitle, // title
        location, // jobLocation
        jobDesc, // description
        organization, // hiringOrganization
        directApply, // directApply
        timeModel, // employmentType
        datePosted, // datePosted
    };
    return (
        <Section addSeperation>
            {generateJob(jsonLd)}
            <Wrapper addWhitespace>
                <ArticleHead>
                    <Heading size="heading-2" innerHTML={jobTitle} />
                    {(timeModel || location) && (
                        <JobInfos type="copy-b" data-sheet="info">
                            {timeModel && (
                                <Info>
                                    <Icon>
                                        {modelIcon ? modelIcon() : <Clock />}
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
                {jobDesc && <Copy innerHTML={jobDesc} />}
                {(primaryAction || secondaryAction) && directApply && (
                    <StyledActions
                        primary={primaryAction && primaryAction()}
                        secondary={secondaryAction && secondaryAction()}
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export default JobArticle;
