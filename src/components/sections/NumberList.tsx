import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Heading from 'components/typography/Heading';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';

const View = styled.div`
    text-align: center;

    & > * {
        margin: 0 auto;
    }

    @media ${mq.semilarge} {
        text-align: left;

        & > * {
            margin: 0;
        }
    }
`;

const Icon = styled.img`
    display: block;
    max-width: 140px;
    max-height: 140px;

    margin-bottom: ${spacings.nudge * 2}px;
`;

const NumberContainer = styled.div<{ height: number }>`
    max-width: max-content;
    min-height: 90px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media ${mq.semilarge} {
        min-height: 100px;
    }

    /* margin-bottom: ${spacings.nudge * 2}px; */

    @media ${mq.large} {
        min-height: 120px;
    }
`;

const Number = styled.div<{ isInverted?: boolean; stringLength: number }>`
    max-height: 140px;
    ${({ stringLength }) =>
        stringLength <= 6
            ? withRange([72, 120], 'font-size')
            : stringLength >= 10
            ? withRange([33, 42], 'font-size')
            : withRange([52, 72], 'font-size')}

    color: ${({ isInverted, theme }) =>
        isInverted ? color(theme).light : color(theme).primary.dark};
`;

const Label = styled(Heading)`
    max-width: 80%;
`;

const IconBlock: React.FC<{
    icon?: { src: string; alt?: string };
    number?: string;
    label?: string;
    isInverted?: boolean;
}> = ({ icon, label, number, isInverted }) => {
    const theme = React.useContext(ThemeContext);

    const stringLength = number ? number.length : 0;

    return (
        <View>
            {icon && <Icon src={icon.src} alt={icon.alt} />}
            <NumberContainer height={0}>
                <Number stringLength={stringLength} isInverted={isInverted}>
                    {number}
                </Number>
            </NumberContainer>
            <Label size="super" textColor={color(theme).secondary.dark}>
                {label}
            </Label>
        </View>
    );
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: -${spacings.spacer}px;
    margin-top: -${spacings.spacer * 2}px;

    @media ${mq.semilarge} {
        margin-top: -${spacings.spacer}px;
    }

    & > * {
        padding: ${spacings.spacer}px;
        padding-top: ${spacings.spacer * 2}px;

        @media ${mq.semilarge} {
            padding-top: ${spacings.spacer}px;
        }

        flex-basis: 100%;

        @media ${mq.semilarge} {
            flex: 0 0 50%;
        }

        @media ${mq.large} {
            flex: 0 1 33.33%;
        }
    }
`;

const NumberList: React.FC<{
    items: {
        icon?: { src: string; alt?: string };
        number?: string;
        label?: string;
    }[];
    bgMode?: 'inverted';
}> = ({ items, bgMode }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    return (
        <Section
            addSeperation
            bgColor={isInverted ? color(theme).primary.dark : 'transparent'}
            bgMode={isInverted ? 'inverted' : undefined}
        >
            <Wrapper addWhitespace>
                <ContentContainer>
                    {items.map((item, i) => {
                        return (
                            <IconBlock
                                {...item}
                                key={i}
                                isInverted={isInverted}
                            />
                        );
                    })}
                </ContentContainer>
            </Wrapper>
        </Section>
    );
};

export default NumberList;
