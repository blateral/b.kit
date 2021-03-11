import Grid from 'components/base/Grid';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import Intro from 'components/blocks/Intro';
import LeafletMap from 'components/blocks/LeafletMap';
import { HeadlineTag } from 'components/typography/Heading';
import React, { FC, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mq, spacings, getColors as color, withRange } from 'utils/styles';

const StyledSection = styled(Section)`
    position: relative;
    min-height: 500px;
    z-index: 0;
`;

const MapContainer = styled(LeafletMap)<{ isMirrored?: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 500px;

    @media ${mq.semilarge} {
        position: absolute;
        width: 50%;
        height: 100%;
        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '50%')};
        right: ${({ isMirrored }) => (isMirrored ? '50%' : 'auto')};

        transform: translateX(
            ${({ isMirrored }) => (isMirrored ? '100%' : '-100%')}
        );
    }

    @media ${mq.xlarge} {
        max-width: ${spacings.wrapperLarge / 2}px;
    }
`;

const CardWrapper = styled(Wrapper)`
    pointer-events: none;
`;

const LocationInfoCard = styled.div<{ isMirrored?: boolean }>`
    min-height: 100px;
    padding: ${spacings.nudge * 3}px ${spacings.nudge * 3}px
        ${spacings.spacer * 2}px ${spacings.nudge * 3}px;
    pointer-events: all;

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px ${spacings.spacer}px
            ${spacings.spacer * 2}px ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        ${withRange([spacings.spacer * 3, spacings.spacer * 5], 'padding-top')};
        ${withRange(
            [spacings.spacer * 3, spacings.spacer * 5],
            'padding-bottom'
        )};
        ${({ isMirrored }) =>
            isMirrored
                ? withRange(
                      [spacings.spacer, spacings.spacer * 4],
                      'padding-right'
                  )
                : `padding-right: ${spacings.spacer}px`};
        ${({ isMirrored }) =>
            !isMirrored
                ? withRange(
                      [spacings.spacer, spacings.spacer * 4],
                      'padding-left'
                  )
                : `padding-left: ${(1 / 28) * 100}vw`};
    }

    @media ${mq.xlarge} {
        ${({ isMirrored }) =>
            !isMirrored
                ? withRange(
                      [spacings.spacer, spacings.spacer * 4],
                      'padding-left'
                  )
                : `padding-left: ${(1 / 28) * spacings.wrapper}px`};
    }
`;

const CardHeader = styled.div`
    display: flex;
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}

    @media ${mq.medium} {
        & > * {
            max-width: 50%;
        }
    }
`;

export interface LocationIcon {
    url: string;
    size: [number, number];
    anchor: [number, number];
}

export interface MapLocation {
    id: string;
    position: [number, number];
    icon?: LocationIcon;
    iconActive?: LocationIcon;
    meta?: {
        title?: string;
        titleAs?: HeadlineTag;
        superTitle?: string;
        superTitleAs?: string;
        contact?: Array<{ icon?: React.ReactNode; label?: string }>;
        primaryLabel?: string;
        secondaryLabel?: string;
    };
}

const Map: FC<{
    isInverted?: boolean;
    isMirrored?: boolean;
    center?: [number, number];
    zoom?: number;
    flyToZoom?: number;
    initialLocation?: string;
    locations?: Array<MapLocation>;
    /** Show all markers on first load */
    allMarkersVisible?: boolean;
    /** Map container padding for show all markers */
    fitBoundsPadding?: [number, number];
    /** Pan to marker on click. Value is the zoom value */
    panToMarkerOnClick?: boolean;

    primaryAction?: (props: {
        isInverted?: boolean;
        label?: string;
    }) => React.ReactNode;
    secondaryAction?: (props: {
        isInverted?: boolean;
        label?: string;
    }) => React.ReactNode;
    flyToControl?: React.ReactNode;
    controlNext?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
    }) => React.ReactNode;
    controlPrev?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
    }) => React.ReactNode;
}> = ({
    isInverted = false,
    isMirrored = false,
    center = [51.505, -0.09],
    zoom = 5,
    flyToZoom,
    initialLocation,
    locations,
    allMarkersVisible = false,
    fitBoundsPadding,
    panToMarkerOnClick,
    primaryAction,
    secondaryAction,
    flyToControl,
}) => {
    const theme = useContext(ThemeContext);
    const [activeLocation, setActiveLocation] = useState<string>(
        initialLocation || ''
    );

    return (
        <StyledSection
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
        >
            <MapContainer
                center={center}
                zoom={zoom}
                isMirrored={isMirrored}
                onMarkerClick={(markerId) => {
                    setActiveLocation(markerId);
                    return panToMarkerOnClick || false;
                }}
                flyToControl={flyToControl}
                onFlyToClick={() => {
                    const location = locations?.find(
                        (loc) => loc.id === activeLocation
                    );
                    if (location) {
                        return {
                            position: location.position,
                            zoom: flyToZoom,
                        };
                    } else return undefined;
                }}
                allMarkersVisible={allMarkersVisible}
                fitBoundsPadding={fitBoundsPadding}
                markers={locations?.map(
                    ({ id, position, icon, iconActive }) => {
                        return {
                            id,
                            position: position,
                            icon:
                                id === activeLocation
                                    ? iconActive || icon
                                    : icon,
                        };
                    }
                )}
            />
            <CardWrapper clampWidth="normal">
                <Grid.Row gutter={spacings.spacer}>
                    <Grid.Col
                        semilarge={{
                            span: 14 / 28,
                            move: (isMirrored ? 14 : 0) / 28,
                        }}
                    ></Grid.Col>
                    <Grid.Col
                        semilarge={{
                            span: 14 / 28,
                            move: (isMirrored ? -14 : 0) / 28,
                        }}
                    >
                        {locations?.map(({ id, meta }, i) => {
                            if (id === activeLocation && meta?.title) {
                                return (
                                    <LocationInfoCard
                                        key={i}
                                        isMirrored={isMirrored}
                                    >
                                        <CardHeader>
                                            <Intro
                                                isInverted={isInverted}
                                                title={meta.title}
                                                superTitle={meta?.superTitle}
                                            />
                                        </CardHeader>
                                        {(primaryAction || secondaryAction) && (
                                            <StyledActions
                                                primary={
                                                    meta?.primaryLabel &&
                                                    primaryAction &&
                                                    primaryAction({
                                                        isInverted,
                                                        label:
                                                            meta?.primaryLabel,
                                                    })
                                                }
                                                secondary={
                                                    meta?.secondaryLabel &&
                                                    secondaryAction &&
                                                    secondaryAction({
                                                        isInverted,
                                                        label:
                                                            meta?.secondaryLabel,
                                                    })
                                                }
                                            />
                                        )}
                                    </LocationInfoCard>
                                );
                            } else return;
                        })}
                    </Grid.Col>
                </Grid.Row>
            </CardWrapper>
        </StyledSection>
    );
};

export default Map;
