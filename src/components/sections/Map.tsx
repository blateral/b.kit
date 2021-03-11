import Grid from 'components/base/Grid';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';
import LeafletMap from 'components/blocks/LeafletMap';
import { HeadlineTag } from 'components/typography/Heading';
import React, { FC, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mq, spacings, getColors as color } from 'utils/styles';

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
    height: 100%;

    @media ${mq.semilarge} {
        position: absolute;
        width: 50%;
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

export interface LocationIcon {
    url: string;
    size: [number, number];
    anchor: [number, number];
}

export interface MapLocation {
    id: string;
    position: {
        lat: number;
        lng: number;
    };
    icon?: LocationIcon;
    iconActive?: LocationIcon;
    meta?: {
        title?: string;
        superTitle?: string;
        contact?: Array<{ icon?: React.ReactNode; label?: string }>;
    };
}

const Map: FC<{
    isInverted?: boolean;
    isMirrored?: boolean;
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    activeLocationId?: string;
    locations?: Array<MapLocation>;

    primaryAction?: (props: {
        isInverted?: boolean;
        label?: string;
    }) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean, label?: string) => React.ReactNode;
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
    isInverted,
    isMirrored,
    title,
    titleAs,
    superTitle,
    superTitleAs,
    activeLocationId,
    locations,
}) => {
    const theme = useContext(ThemeContext);
    const [activeLocation, setActiveLocation] = useState<string>(
        activeLocationId || ''
    );
    // const [getLocations, setLocations] = useState(locations);

    return (
        <StyledSection
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
        >
            <MapContainer
                center={{
                    lat: 51.505,
                    lng: -0.09,
                }}
                isMirrored={isMirrored}
                onMarkerClick={(markerId) => setActiveLocation(markerId)}
                markers={locations?.map(
                    ({ id, position, icon, iconActive }) => {
                        return {
                            id,
                            position: {
                                lat: position.lat,
                                lng: position.lng,
                            },
                            icon:
                                id === activeLocation
                                    ? iconActive || icon
                                    : icon,
                        };
                    }
                )}
            />
            <Wrapper clampWidth="normal">
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
                        {title && (
                            <Intro
                                isInverted={isInverted}
                                title={title}
                                titleAs={titleAs}
                                superTitle={superTitle}
                                superTitleAs={superTitleAs}
                            />
                        )}
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </StyledSection>
    );
};

export default Map;
