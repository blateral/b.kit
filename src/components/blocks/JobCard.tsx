import Clock from 'components/base/icons/Clock';
import LocationPin from 'components/base/icons/LocationPin';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled, { css } from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

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

    ${({ clickable, isInverted }) =>
        clickable &&
        css`
            transition: all 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
                box-shadow: 0px 2px 6px
                    ${isInverted
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(0, 0, 0, 0.35)'};

                color: ${({ theme }) => color(theme).primary.hover};
            }

            &:focus {
                box-shadow: 0px 2px 6px
                    ${isInverted
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(0, 0, 0, 0.3)'};
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

const ViewLink = styled(Link)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    && {
        margin: 0;
    }
`;

export interface JobCardProps {
    /** Invert text and background color */
    isInverted?: boolean;

    /** For use on light backgrounds */
    hasBackground?: boolean;

    /** Job card title (richtext) */
    jobTitle: string;

    /** Label job time model (e.g. fulltime) */
    timeModel?: string;

    /** Injection function for job time model icon */
    modelIcon?: () => React.ReactNode;

    /** Label for job location */
    location?: string;

    /** Injection function for job location icon */
    locationIcon?: () => React.ReactNode;

    link?: LinkProps;
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
            timeModel,
            location,
            modelIcon,
            locationIcon,
            className,
            link,
        },
        ref
    ) => {
        return (
            <View
                ref={ref}
                isInverted={isInverted}
                hasBg={hasBackground}
                className={className}
                clickable={!!link}
            >
                <Heading
                    textColor="inherit"
                    size="heading-2"
                    data-sheet="title"
                    innerHTML={jobTitle}
                    hyphens
                />
                <Copy type="copy-b" textColor="inherit" data-sheet="info">
                    <Info>
                        <Icon>{modelIcon ? modelIcon() : <Clock />}</Icon>
                        <MainLabel>{timeModel}</MainLabel>
                    </Info>

                    <Info>
                        <Icon>
                            {locationIcon ? locationIcon() : <LocationPin />}
                        </Icon>
                        <MainLabel>{location}</MainLabel>
                    </Info>
                </Copy>
                {link && (
                    <ViewLink
                        {...link}
                        ariaLabel={link?.href ? jobTitle : undefined}
                    />
                )}
            </View>
        );
    }
);

JobCard.displayName = 'JobCard';

export default JobCard;
