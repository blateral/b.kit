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
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.dark};
        border-radius: 50%;

        background: ${({ theme, isActive, isInverted }) =>
            isActive
                ? isInverted
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.dark
                : isInverted
                ? color(theme).elementBg.dark
                : color(theme).elementBg.light};

        position: absolute;
        top: 16px;
        left: 0px;

        transition: all 0.2s ease-in-out;

        @media ${mq.large} {
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
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};
        left: 5px;

        @media ${mq.large} {
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:first-child {
        padding-top: 0;

        &:before {
            top: 16px;
        }
    }
`;

const TimelineText = styled.div<{
    isSwitched?: boolean;
}>`
    position: relative;
    padding-left: ${spacings.nudge * 3 + 2}px;
    padding-bottom: ${spacings.spacer}px;

    @media ${mq.large} {
        max-width: 50%;

        margin-left: ${({ isSwitched }) => isSwitched && '50%'};
        margin-right: ${({ isSwitched }) => !isSwitched && '50%'};

        padding: ${({ isSwitched }) =>
            isSwitched
                ? `${spacings.spacer}px 0 ${spacings.spacer * 1.75}px ${
                      spacings.spacer
                  }px`
                : `${spacings.spacer}px ${spacings.spacer}px ${
                      spacings.spacer * 1.75
                  }px 0`};
    }

    &:first-child {
        padding-top: 0;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const ItemTitle = styled(Heading)``;

const ItemTextBlock = styled(Copy)``;

const Timeline: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    items?: { label?: string; title?: string; text?: string }[];
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, bgMode, items }) => {
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
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? color(theme).sectionBg.dark
                    : hasBg
                    ? color(theme).sectionBg.medium
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
                                    <ItemTitle
                                        size="heading-2"
                                        textColor={
                                            isInverted
                                                ? color(theme).text.inverted
                                                : color(theme).text.default
                                        }
                                    >
                                        {item.label}
                                    </ItemTitle>

                                    <ItemTextBlock
                                        type="copy-b"
                                        size="big"
                                        isInverted={isInverted}
                                    >
                                        {item.title}
                                    </ItemTextBlock>
                                    <ItemTextBlock
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
