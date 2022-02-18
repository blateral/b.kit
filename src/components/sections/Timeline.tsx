import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import React, {
    createRef,
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';
import { useObserverSupport } from 'utils/useObserverSupport';
import { withLibTheme } from 'utils/LibThemeProvider';

const TimelineBlock = styled.div<{
    isSwitched?: boolean;
    isActive?: boolean;
    isInverted?: boolean;
}>`
    position: relative;

    @media ${mq.large} {
        text-align: ${({ isSwitched }) => (isSwitched ? 'left' : 'right')};
    }

    &:after {
        content: '';
        width: 10px;
        height: 10px;

        box-sizing: content-box;
        border: 2px solid
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.elementBg.light
                    : color(theme).new.elementBg.dark};
        border-radius: 50%;

        background: ${({ theme, isActive, isInverted }) =>
            isActive
                ? isInverted
                    ? color(theme).new.elementBg.light
                    : color(theme).new.elementBg.dark
                : isInverted
                ? color(theme).new.elementBg.dark
                : color(theme).new.elementBg.light};

        position: absolute;
        top: 0;
        left: 0px;

        transition: all 0.2s ease-in-out;

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
        background: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).new.elementBg.light
                : color(theme).new.elementBg.dark};
        left: 5px;

        @media ${mq.large} {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const TimelineText = styled.div<{ isSwitched?: boolean }>`
    position: relative;
    padding: ${spacings.nudge * 2}px;
    padding-bottom: ${spacings.spacer}px;

    @media ${mq.large} {
        max-width: 50%;

        margin-left: ${({ isSwitched }) => isSwitched && '50%'};
        margin-right: ${({ isSwitched }) => !isSwitched && '50%'};

        padding: ${({ isSwitched }) =>
            isSwitched
                ? `${spacings.spacer}px 0 ${spacings.spacer}px ${spacings.spacer}px`
                : `${spacings.spacer}px ${spacings.spacer}px ${spacings.spacer}px 0`};
    }

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const Timeline: React.FC<{
    items?: { label?: string; title?: string; text?: string }[];
    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, items }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [targetRefs, setTargetRefs] = useState<
        MutableRefObject<HTMLDivElement>[]
    >([]);
    const observerSupported = useObserverSupport();
    const observerRef = useRef<IntersectionObserver | null>(null);

    const [activeItem, setActiveItem] = useState<number>(0);

    useEffect(() => {
        if (observerSupported && targetRefs && targetRefs.length > 0) {
            const options = {
                rootMargin: '-50% 0% -50% 0%',
                threshold: 0,
            };

            observerRef.current = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = targetRefs?.findIndex(
                            (t) => t.current === entry.target
                        );
                        setActiveItem(index);
                    }
                });
            }, options);

            for (let i = 0; i < targetRefs.length; i++) {
                observerRef.current.observe(targetRefs[i].current);
            }
        }

        return () => {
            observerRef.current?.disconnect();
        };
    }, [targetRefs, observerSupported]);

    useEffect(() => {
        setTargetRefs(() =>
            Array(items?.length)
                .fill(null)
                .map((_, i) => targetRefs[i] || createRef())
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items?.length]);

    return (
        <Section
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper addWhitespace>
                {items &&
                    items.map((item, i) => {
                        return (
                            <TimelineBlock
                                ref={targetRefs[i]}
                                isActive={activeItem === i}
                                isSwitched={i % 2 === 0}
                                isInverted={isInverted}
                                key={i}
                            >
                                <TimelineText isSwitched={i % 2 === 0}>
                                    <div>
                                        <Heading
                                            size="heading-1"
                                            textColor={
                                                isInverted
                                                    ? color(theme).new.text
                                                          .inverted
                                                    : color(theme).new.text
                                                          .default
                                            }
                                        >
                                            {item.label}
                                        </Heading>
                                    </div>
                                    <div>
                                        <Heading
                                            size="heading-3"
                                            isInverted={isInverted}
                                        >
                                            {item.title}
                                        </Heading>
                                    </div>
                                    <Copy
                                        innerHTML={item.text}
                                        isInverted={isInverted}
                                    />
                                </TimelineText>
                            </TimelineBlock>
                        );
                    })}
            </Wrapper>
        </Section>
    );
};

export const TimelineComponent = Timeline;
export default withLibTheme(Timeline);
