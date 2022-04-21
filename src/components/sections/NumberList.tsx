import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import Heading from 'components/typography/Heading';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';

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

const Number = styled(Callout)<{ isInverted?: boolean; stringLength: number }>`
    max-height: 140px;
    ${({ stringLength }) =>
        stringLength <= 6
            ? withRange([72, 120], 'font-size')
            : stringLength >= 10
            ? withRange([33, 42], 'font-size')
            : withRange([52, 72], 'font-size')}

    color: ${({ isInverted, theme }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};
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
    const theme = useContext(ThemeContext);

    const stringLength = number ? number.length : 0;

    return (
        <View>
            {icon && <Icon src={icon.src} alt={icon.alt} />}
            <NumberContainer height={0}>
                <Number
                    renderAs="div"
                    stringLength={stringLength}
                    isInverted={isInverted}
                >
                    {number}
                </Number>
            </NumberContainer>
            <Label
                size="super"
                textColor={
                    isInverted
                        ? color(theme).new.primary.inverted
                        : color(theme).new.primary.default
                }
            >
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
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    items?: {
        icon?: { src: string; alt?: string };
        number?: string;
        label?: string;
    }[];
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, items, bgMode }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <ContentContainer>
                    {items?.map((item, i) => {
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

export const NumberListComponent = NumberList;
export default withLibTheme(NumberList);
