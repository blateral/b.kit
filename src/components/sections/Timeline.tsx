import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';
// import { useObserverSupport } from 'utils/useObserverSupport';

const TimelineBlock = styled.div<{ isSwitched?: boolean; isActive?: boolean }>`
    position: relative;

    @media ${mq.large} {
        text-align: ${({ isSwitched }) => (isSwitched ? 'left' : 'right')};
    }

    &:after {
        content: '';
        width: 10px;
        height: 10px;

        box-sizing: content-box;
        border: 1px solid ${({ theme }) => color(theme).dark};
        border-radius: 50%;

        background: ${({ theme, isActive }) =>
            isActive ? color(theme).dark : color(theme).light};

        position: absolute;
        top: 0;
        left: 0px;

        @media ${mq.large} {
            top: 0;
            left: ${({ isSwitched }) => (!isSwitched ? '50%' : 'auto')};
            right: ${({ isSwitched }) => isSwitched && '50%'};
            transform: translateX(
                ${({ isSwitched }) => (isSwitched ? '50%' : '-50%')}
            );
        }
    }

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 2px;
        min-height: 160px;
        height: 100%;
        background: ${({ theme }) => color(theme).dark};
        left: 5px;

        @media ${mq.large} {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const TimelineText = styled.div<{ isSwitched?: boolean }>`
    position: relative;
    padding: ${spacings.spacer}px;

    @media ${mq.large} {
        max-width: 50%;

        margin-left: ${({ isSwitched }) => isSwitched && '50%'};
        margin-right: ${({ isSwitched }) => !isSwitched && '50%'};

        padding: ${({ isSwitched }) =>
            isSwitched
                ? `${spacings.spacer * 2}px 0 ${spacings.spacer * 2}px ${
                      spacings.spacer * 1.5
                  }px`
                : `${spacings.spacer * 2}px ${spacings.spacer * 1.5}px ${
                      spacings.spacer * 2
                  }px 0`};
    }

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const Timeline: React.FC<{
    items?: { label?: string; title?: string; text?: string }[];
}> = ({ items }) => {
    const theme = React.useContext(ThemeContext);
    const targetRef = React.useRef<HTMLDivElement>(null);
    // const observerSupported = useObserverSupport();

    const [active /* setActive */] = React.useState(false);

    return (
        <Section addSeperation>
            <Wrapper addWhitespace>
                {items &&
                    items.map((item, i) => {
                        return (
                            <TimelineBlock
                                ref={targetRef}
                                isActive={active[i]}
                                isSwitched={i % 2 === 0}
                                key={i}
                            >
                                <TimelineText isSwitched={i % 2 === 0}>
                                    <div>
                                        <Heading
                                            size="heading-1"
                                            textColor={
                                                color(theme).secondary.dark
                                            }
                                        >
                                            {item.label}
                                        </Heading>
                                    </div>
                                    <div>
                                        <Heading size="heading-3">
                                            {item.title}
                                        </Heading>
                                    </div>
                                    <Copy innerHTML={item.text} />
                                </TimelineText>
                            </TimelineBlock>
                        );
                    })}
            </Wrapper>
        </Section>
    );
};

export default Timeline;
