import Computer from 'components/base/icons/Computer';
import LocationPin from 'components/base/icons/LocationPin';
import Mail from 'components/base/icons/Mail';
import Map from 'components/base/icons/Map';
import Phone from 'components/base/icons/Phone';
import POIFacts from 'components/blocks/pois/POIFacts';
import Copy, { copyStyle } from 'components/typography/Copy';
import Link from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { getColors, mq, spacings } from 'utils/styles';
import { useMediaQuery } from 'utils/useMediaQuery';

const DetailBlockView = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    &:after {
        display: none;
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

const DetailBlock: React.FC<{
    items: {
        text?: string;
        icon?: (isInverted?: boolean) => React.ReactNode;
    }[];
}> = ({ items }) => {
    return items.length > 0 ? (
        <DetailBlockView>
            {items.map(({ text, icon }, i) => {
                const isMail = items[i]?.text?.includes('@');
                const isWeb = items[i]?.text?.includes('www.');
                return items[i].text ? (
                    <BlockWrapper key={i}>
                        <Icon>{icon && icon()}</Icon>
                        {text &&
                            (isWeb || isMail ? (
                                <Link
                                    href={isMail ? `mailto:${text}` : `${text}`}
                                >
                                    {text}
                                </Link>
                            ) : (
                                <Copy innerHTML={text} />
                            ))}
                    </BlockWrapper>
                ) : null;
            })}
        </DetailBlockView>
    ) : null;
};

const View = styled.div`
    border: 1px solid ${({ theme }) => getColors(theme).elementBg.medium};
    padding: ${spacings.nudge * 2}px;
    border-radius: ${spacings.nudge}px;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const EventTitle = styled(Copy)`
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

const TextContent = styled.div<{ isInverted?: boolean }>`
    ${copyStyle('copy')};
    color: ${({ theme, isInverted }) =>
        isInverted
            ? getColors(theme).text.inverted
            : getColors(theme).text.default};

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media ${mq.semilarge} {
        margin-left: -${spacings.spacer}px;
        margin-right: -${spacings.spacer}px;
    }
`;

const Col = styled.div<{ span?: number; largerSpan?: number }>`
    @media ${mq.semilarge} {
        flex: 1 0 ${({ span }) => (span ? `${span}%` : '100%')};
        padding-left: ${spacings.spacer}px;
        padding-right: ${spacings.spacer}px;

        & + & {
            border-left: 1px solid
                ${({ theme }) => getColors(theme).elementBg.medium};
        }
    }

    @media ${mq.large} {
        flex: 1 0
            ${({ largerSpan }) => (largerSpan ? `${largerSpan}%` : '100%')};
    }
`;

const Action = styled.div`
    margin-top: ${spacings.spacer}px;
`;

/***** POI Types *****/
export type POIBasics = {
    name: string;
    description?: string;
    shortDescription?: string;
};

export type POILocation = {
    address: string;
    street: string;
    postalCode: string;
    city: string;
    coordinates?: { lat: number; long: number };
    mail: string;
    phone: string;
    web: string;
};

export type POIContact = {
    name: string;
    position: string;
    street: string;
    postalCode: string;
    city: string;
    mail: string;
    phone: string;
};

type POImq = 'small' | 'medium' | 'semilarge' | 'large' | 'xlarge';

const PointOfInterest: React.FC<{
    id: number;
    isInverted?: boolean;
    facts?: string[];
    customFact?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
    }) => React.ReactNode;
    location: POILocation;
    basics: POIBasics;
    action?: (isInverted?: boolean) => React.ReactNode;
}> = ({ isInverted, facts, customFact, location, basics, action }) => {
    const currentMq = useMediaQuery([
        'small',
        'medium',
        'semilarge',
        'large',
        'xlarge',
    ]) as POImq | undefined;

    const isMobile =
        currentMq === undefined ||
        currentMq === 'small' ||
        currentMq === 'medium';
    return (
        <View>
            <TextContent>
                {basics.name && (
                    <EventTitle
                        type="copy-b"
                        size="big"
                        isInverted={isInverted}
                    >
                        {basics.name}
                    </EventTitle>
                )}
            </TextContent>
            <Row>
                <Col span={60} largerSpan={66.66}>
                    <TextContent>
                        {facts && (
                            <POIFacts
                                facts={facts}
                                isInverted={isInverted}
                                customFact={customFact}
                            />
                        )}
                        <Copy innerHTML={basics.shortDescription} />
                    </TextContent>
                    {action && <Action>{action(isInverted)}</Action>}
                </Col>
                {!isMobile && (
                    <Col span={40} largerSpan={33.33}>
                        <TextContent>
                            <DetailBlock
                                items={[
                                    {
                                        text: `${location.address}, ${location.street}, ${location.postalCode} ${location.city}`,
                                        icon: () => <LocationPin />,
                                    },
                                    {
                                        text: `Auf Karte anzeigen`,
                                        icon: () => <Map />,
                                    },
                                    {
                                        text: `${location.phone}`,
                                        icon: () => <Phone />,
                                    },
                                    {
                                        text: `${location.mail}`,
                                        icon: () => <Mail />,
                                    },
                                    {
                                        text: `${location.web}`,
                                        icon: () => <Computer />,
                                    },
                                ]}
                            />
                        </TextContent>
                    </Col>
                )}
            </Row>
        </View>
    );
};

export default PointOfInterest;
