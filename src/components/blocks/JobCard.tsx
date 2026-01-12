import ClockFilled from 'components/base/icons/ClockFilled';
import LocationPin from 'components/base/icons/LocationPin';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled, { css } from 'styled-components';
import { isValidArray } from 'utils/arrays';
import { StructuredEmploymentType } from 'utils/structuredData';
import { getColors as color, getGlobals, mq, spacings } from 'utils/styles';

const View = styled.div<{
    isInverted?: boolean;
    hasBg?: boolean;
    clickable?: boolean;
}>`
    position: relative;
    color: ${({ theme }) => color(theme).primary.default};
    background: ${({ theme, hasBg, isInverted }) =>
        isInverted
            ? color(theme).elementBg.medium
            : hasBg
            ? color(theme).elementBg.light
            : color(theme).elementBg.medium};

    padding: ${spacings.spacer}px;

    border-radius: ${({ theme }) => getGlobals(theme).sections.edgeRadius};

    ${({ clickable, isInverted, theme }) =>
        clickable &&
        css`
            transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
            cursor: pointer;

            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    box-shadow: 0px 2px 6px
                        ${isInverted
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.35)'};

                    color: ${({ theme }) => color(theme).primary.hover};
                }
            }

            &:has(:focus-visible) {
                outline: 2px solid
                    ${isInverted
                        ? color(theme).primary.inverted
                        : color(theme).primary.default};
                outline-offset: 2px;
            }

            &:active {
                box-shadow: 0px 2px 6px
                    ${isInverted
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(0, 0, 0, 0.3)'};
            }
        `}

    @media ${mq.medium} {
        min-height: 440px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const JobInfos = styled(Copy)`
    &:not(:first-child) {
        margin-top: ${spacings.nudge * 4}px;
    }

    color: ${({ theme }) => color(theme).primary.default};

    ${View}:hover & {
        color: ${({ theme }) => color(theme).primary.hover};
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

const HeadingLink = styled(Link)`
    color: ${({ theme }) => color(theme).primary.default};
    text-decoration: none;

    ${View}:hover & {
        color: ${({ theme }) => color(theme).primary.hover};
    }

    &:focus-visible {
        outline: none;
    }

    &:before {
        content: '';
        position: absolute;
        inset: 0;
    }
`;

export interface JobLocation {
    name?: string;
    description?: string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
}

export interface JobCardProps {
    /** Invert text and background color */
    isInverted?: boolean;

    /** For use on light backgrounds */
    hasBackground?: boolean;

    /** Job card title (richtext) */
    jobTitle: string;

    /** The employment type (important for structured data) */
    employmentTypes?: Array<{
        name: string;
        type: StructuredEmploymentType;
    }>;

    /** Injection function for job time model icon */
    modelIcon?: () => React.ReactNode;

    /** List of job locations */
    locations?: JobLocation[];

    /** Total amount all locations */
    totalLocations?: number;

    /** Label to show if all location selected */
    allLocationsLabel?: string;

    /** Injection function for job location icon */
    locationIcon?: () => React.ReactNode;

    /** Job card link */
    link?: LinkProps;

    /** Employment type label for accessibility */
    employmentTypeAriaLabel?: string;

    /** Location label for accessibility */
    locationAriaLabel?: string;
}

const JobCard = React.forwardRef<
    HTMLDivElement,
    JobCardProps & {
        className?: string;
    }
>(
    (
        {
            isInverted,
            hasBackground,
            jobTitle,
            employmentTypes,
            locations,
            totalLocations,
            allLocationsLabel,
            modelIcon,
            locationIcon,
            employmentTypeAriaLabel,
            locationAriaLabel,
            className,
            link,
        },
        ref
    ) => {
        const hasEmploymentType = isValidArray(employmentTypes, false);
        const validLocations = locations?.filter((loc) => loc.name);
        const hasLocations = isValidArray(validLocations, false);

        let locationText = '';

        if (hasLocations) {
            if (
                totalLocations !== undefined &&
                validLocations.length >= totalLocations &&
                allLocationsLabel
            ) {
                locationText = allLocationsLabel;
            } else {
                locationText = validLocations
                    .map((loc) => loc.name)
                    ?.join(', ');
            }
        }

        const employmentType = employmentTypes
            ?.filter((type) => type.name)
            .map((type) => type.name)
            ?.join(', ');

        return (
            <View
                ref={ref}
                isInverted={isInverted}
                hasBg={hasBackground}
                className={className}
                clickable={!!link}
            >
                <HeadingLink
                    {...link}
                    ariaLabel={link?.href ? jobTitle : undefined}
                >
                    <Heading
                        renderAs="h3"
                        textColor="inherit"
                        size="heading-2"
                        data-sheet="title"
                        innerHTML={jobTitle}
                        hyphens
                    />
                </HeadingLink>
                {(hasEmploymentType || hasLocations) && (
                    <JobInfos type="copy-b" data-sheet="info">
                        {hasEmploymentType && (
                            <Info>
                                <Icon>
                                    {modelIcon ? modelIcon() : <ClockFilled />}
                                </Icon>
                                <MainLabel
                                    aria-label={
                                        employmentTypeAriaLabel ||
                                        `Employment Type: ${employmentType}`
                                    }
                                >
                                    {employmentType}
                                </MainLabel>
                            </Info>
                        )}
                        {hasLocations && (
                            <Info>
                                <Icon>
                                    {locationIcon ? (
                                        locationIcon()
                                    ) : (
                                        <LocationPin />
                                    )}
                                </Icon>
                                <MainLabel
                                    aria-label={
                                        locationAriaLabel ||
                                        `Locations: ${locationText}`
                                    }
                                >
                                    {locationText}
                                </MainLabel>
                            </Info>
                        )}
                    </JobInfos>
                )}
            </View>
        );
    }
);

JobCard.displayName = 'JobCard';

export default JobCard;
