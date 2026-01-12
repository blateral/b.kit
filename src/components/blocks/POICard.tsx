import React, { useId } from 'react';
import styled from 'styled-components';

import POIFacts from 'components/blocks/POIFacts';
import Copy, { copyStyle } from 'components/typography/Copy';
import { isValidArray } from 'utils/arrays';
import {
    getColors as color,
    getFonts as font,
    getGlobals as global,
    mq,
    spacings,
} from 'utils/styles';
import InfoList, { Info } from './InfoList';

const View = styled.div<{ isInverted?: boolean }>`
    border: 1px solid
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};
    padding: ${spacings.nudge * 2}px;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const Title = styled.h3<{ isInverted?: boolean }>`
    margin: 0;
    padding: 0;
    ${copyStyle('copy-b', 'big')};
    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme).copy.big.colorInverted
            : font(theme).copy.big.color};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }

    & > * {
        margin: 0;
        padding: 0;
    }
`;

const Description = styled(Copy)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const Body = styled.div<{ isInverted?: boolean }>`
    display: flex;
    flex-direction: row;
    /* align-items: flex-start; */

    @media ${mq.semilarge} {
        margin-left: -${spacings.spacer}px;
        margin-right: -${spacings.spacer}px;

        & > * + * {
            border-left: 1px solid
                ${({ theme, isInverted }) =>
                    isInverted
                        ? color(theme).elementBg.light
                        : color(theme).elementBg.dark};
        }
    }
`;

const Col = styled.div`
    flex: 1 0 100%;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        flex: 1 0 60%;
        padding: 0 ${spacings.spacer}px;
    }

    @media ${mq.large} {
        flex: 1 0 ${(2 / 3) * 100}%;
    }
`;

const InfoCol = styled(Col)`
    display: none;
    margin-bottom: ${spacings.nudge * 2}px;

    @media ${mq.semilarge} {
        display: block;
        flex: 1 0 40%;
    }

    @media ${mq.large} {
        display: block;
        flex: 1 0 ${(1 / 3) * 100}%;
    }
`;

const Action = styled.div``;

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

export interface POICardActionFnProps {
    isInverted?: boolean;
    name?: string;
}

export type POICardActionFn = (props: POICardActionFnProps) => React.ReactNode;

export interface POICardProps {
    renderAs?: 'li' | 'div';

    /** Invert text and background for use on dark sections */
    isInverted?: boolean;

    /** POI name */
    name: string;

    /** Short POI description text (RichText) */
    shortDescription?: string;

    /** Array of additional POI informations */
    infos?: Info[];

    /** Array of POI facts */
    facts?: string[];

    /** Function to inject custom fact node */
    customFact?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
    }) => React.ReactNode;

    /** Function to inject custom action node */
    action?: POICardActionFn;
}

const POICard: React.FC<POICardProps> = ({
    renderAs = 'div',
    isInverted,
    name,
    shortDescription,
    facts,
    infos,
    customFact,
    action,
}) => {
    const hasFacts = isValidArray(facts, false);
    const hasInfos = isValidArray(infos, false);
    const id = useId();

    return (
        <View as={renderAs} isInverted={isInverted} aria-labelledby={id}>
            {name && (
                <Title id={id} isInverted={isInverted}>
                    {name}
                </Title>
            )}

            {(hasFacts || shortDescription || hasInfos || action) && (
                <Body isInverted={isInverted}>
                    <Col>
                        {isValidArray(facts, false) && (
                            <POIFacts
                                facts={facts}
                                isInverted={isInverted}
                                customFact={customFact}
                            />
                        )}
                        {shortDescription && (
                            <Description
                                isInverted={isInverted}
                                innerHTML={shortDescription}
                            />
                        )}
                        {action && (
                            <Action>{action({ isInverted, name })}</Action>
                        )}
                    </Col>
                    {isValidArray(infos, false) && (
                        <InfoCol>
                            <InfoList
                                isInverted={isInverted}
                                items={[
                                    {
                                        items: infos,
                                    },
                                ]}
                            />
                        </InfoCol>
                    )}
                </Body>
            )}
        </View>
    );
};

export default POICard;
