import Grid from 'components/base/Grid';
import External from 'components/base/icons/External';
import LocationPin from 'components/base/icons/LocationPin';
import Mail from 'components/base/icons/Mail';
import Phone from 'components/base/icons/Phone';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import React from 'react';
import styled from 'styled-components';
import { getSVGDataImg } from 'utils/dataURI';
import { mq, POIBasics, POILocation, spacings } from 'utils/styles';
import useLeafletMap, { LeafletMapMarker } from 'utils/useLeafletMap';
import { LocationIcon } from './Map';

const EventTitle = styled(Heading)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const MapContainer = styled.div`
    position: relative;
    width: 100%;
    height: 290px;
    z-index: 0;
    outline: none;

    @media ${mq.semilarge} {
        height: auto;
        width: auto;
        aspect-ratio: 1 / 1;
    }
`;

const TextContent = styled(Copy)`
    & > * {
        margin-bottom: ${spacings.nudge * 3}px;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const DetailBlockView = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;

    & > * {
        height: 20px;
        width: 20px;
    }
`;

const BlockWrapper = styled.div`
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const DetailTitle = styled(Copy)``;

const DetailBlock: React.FC<{
    title?: string;
    items: {
        text?: string;
        icon?: (isInverted?: boolean) => React.ReactNode;
    }[];
}> = ({ title, items }) => {
    return items.length > 0 ? (
        <DetailBlockView>
            <DetailTitle type="copy-b">{title}</DetailTitle>
            {items.map(({ text, icon }, i) => {
                return items[i].text ? (
                    <BlockWrapper key={i}>
                        <Icon>{icon && icon()}</Icon>
                        {text && (
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                        )}
                    </BlockWrapper>
                ) : null;
            })}
        </DetailBlockView>
    ) : null;
};

const PointOfInterest: React.FC<
    POILocation & POIBasics & { marker?: LocationIcon; isInverted?: boolean }
> = ({
    name,
    // description,
    shortDescription,
    typeAs,

    address,
    street,
    postalCode,
    city,
    coordinates,
    mail,
    phone,
    web,

    marker,
    isInverted,
}) => {
    const markers = React.useMemo(() => {
        const position = [coordinates.lat, coordinates.long] as [
            number,
            number
        ];
        /** Markers */
        const defaultMarker: LocationIcon = {
            size: [28, 28],
            anchor: [14, 28],
            sizeActive: [70, 70],
            anchorActive: [35, 70],
            url: getSVGDataImg(<LocationPin />),
        };
        const markerList: LeafletMapMarker[] = [];

        if (position) {
            markerList.push({
                id: 'location',
                position: position,
                icon: marker || defaultMarker,
            });
        }
        return markerList;
    }, [coordinates.lat, coordinates.long, marker]);

    const { setContainer: setMapContainer } = useLeafletMap({
        activeMarkerId: 'location',
        markers: markers,
        center: [coordinates.lat, coordinates.long],
        zoom: 2.5,
    });

    const isList = typeAs === 'list';
    const isMap = typeAs === 'map';

    return (
        <Section addSeperation>
            <Wrapper addWhitespace>
                <Grid.Row>
                    <Grid.Col
                        semilarge={
                            isList
                                ? { span: 1 / 3, move: 2 / 3 }
                                : { span: 1 / 2, move: 1 / 2 }
                        }
                        large={
                            isMap
                                ? { span: 2 / 3, move: 1 / 3 }
                                : { span: 1 / 3, move: 2 / 3 }
                        }
                    >
                        <MapContainer ref={setMapContainer} tabIndex={0} />
                    </Grid.Col>
                    <Grid.Col
                        semilarge={
                            isList
                                ? { span: 1 / 3, move: 2 / 3 }
                                : { span: 1 / 2, move: -1 / 2 }
                        }
                        large={
                            isMap
                                ? { span: 1 / 3, move: -2 / 3 }
                                : { span: 2 / 3, move: -1 / 3 }
                        }
                    >
                        {isList && (
                            <TextContent>
                                {name && (
                                    <EventTitle
                                        size="heading-2"
                                        isInverted={isInverted}
                                    >
                                        {name}
                                    </EventTitle>
                                )}
                                <Copy
                                    type="copy-b"
                                    innerHTML={shortDescription}
                                />
                            </TextContent>
                        )}
                        <TextContent>
                            <DetailBlock
                                title="Standort"
                                items={[
                                    {
                                        icon: () => <LocationPin />,
                                        text: `${address}, ${street}, ${postalCode} ${city}`,
                                    },
                                    {
                                        icon: () => <Mail />,
                                        text: `${mail}`,
                                    },
                                    {
                                        icon: () => <Phone />,
                                        text: `${phone}`,
                                    },
                                    {
                                        icon: () => <External />,
                                        text: `${web}`,
                                    },
                                ]}
                            />
                        </TextContent>
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export default PointOfInterest;
