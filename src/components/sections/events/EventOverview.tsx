import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import EventBlock, { EventProps } from 'components/blocks/EventBlock';
import Tag, { TagProps } from 'components/blocks/Tag';
import Pointer from 'components/buttons/Pointer';
import Copy from 'components/typography/Copy';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { isValidArray } from 'utils/arrays';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, mq, spacings } from 'utils/styles';
import { deleteUrlParam, getUrlParams, setUrlParam } from 'utils/urlParams';
import { useObserverSupport } from 'utils/useObserverSupport';
import { useScrollTo } from 'utils/useScrollTo';

export type EventItem = Omit<
    EventProps,
    'customTag' | 'isInverted' | 'onTagClick'
>;

const TagContainer = styled.div`
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &:not(:only-child) {
        margin-bottom: ${spacings.nudge * 6}px;
    }
`;

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const Events = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;
const EventItem = styled.li<{ hasBg?: boolean }>`
    padding: ${spacings.nudge * 3}px 0;

    & + & {
        border-top: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }

    &:first-of-type {
        border-top: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }

    &:last-of-type {
        border-bottom: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }
`;

const ListFooter = styled.div`
    margin-top: ${spacings.nudge * 6}px;
    text-align: center;

    @media ${mq.medium} {
        text-align: left;
    }
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};
`;

const EventOverview: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of event item settings */
    events?: EventItem[];

    /** Tags for events filtering */
    tags?: string[];

    /** Initial active tags in filter */
    activeTags?: string[];

    /** Text for load more toggle. Only visible if browser doesn't support IntersectionObserver. */
    showMoreText?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /**
     * Callback function to handle tag click outside of component
     * If no callback is defined filtering is controlled on client
     * */
    onTagClick?: (tag: TagProps, insideList?: boolean) => void;

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    }) => React.ReactNode;
}> = ({
    tags,
    events,
    bgMode,
    anchorId,
    activeTags,
    showMoreText,
    onTagClick,
    customTag,
}) => {
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const { colors } = useLibTheme();
    const urlParamFilterName = 'eventFilter';

    const [selectedTags, setSelectedTags] = React.useState<string[]>(
        activeTags || []
    );
    const [itemsPerRow] = React.useState(1);
    const [visibleRows, setVisibleRows] = React.useState(3);

    const targetRef = React.useRef<HTMLDivElement>(null);
    const observerSupported = useObserverSupport();

    const eventCount = events?.length || 0;

    const setNewPos = useScrollTo(800);

    const getFilters = () => {
        const tags: string[] = [];

        const filters = getUrlParams()[urlParamFilterName];
        if (filters) {
            const tagsFilter = filters?.split(',');
            if (isValidArray(tagsFilter, false)) {
                tags.push(...tagsFilter);
            }
        }
        return tags;
    };

    useEffect(() => {
        const paramTags = getFilters();

        if (paramTags.length > 0) {
            setSelectedTags(paramTags);
        } else {
            setSelectedTags(activeTags || []);
        }
    }, [activeTags]);

    useEffect(() => {
        if (onTagClick || !isValidArray(selectedTags)) return;

        // set filters to URL params
        if (selectedTags.length > 0) {
            setUrlParam(urlParamFilterName, selectedTags.join(','));
        } else {
            deleteUrlParam(urlParamFilterName);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTags]);

    useEffect(() => {
        // if new tag is selected reset list rows to three visible item rows
        setVisibleRows(3);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTags]);

    const handleTagClick = (tag: TagProps, enableToggling = true) => {
        setSelectedTags((prev) => {
            const prevCopy = [...prev];
            const itemIndex = tag.name ? prev.indexOf(tag.name) : -1;

            if (itemIndex === -1 && tag.name) {
                return [...prevCopy, tag.name];
            }
            if (enableToggling) {
                prevCopy.splice(itemIndex, 1);
                return prevCopy;
            }
            return prev;
        });
    };

    useEffect(() => {
        // cancel if intersection observers are not supported
        if (!observerSupported) return;

        const element = targetRef.current;
        let observer: IntersectionObserver;

        if (element) {
            const options = {
                rootMargin: '0px 0px 100px 0px',
                threshold: 0,
            };

            observer = new IntersectionObserver((entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting) {
                    // on bottom of the wrapper load more events
                    if (visibleRows < Math.ceil(eventCount / itemsPerRow)) {
                        setVisibleRows((prev) => prev + 1);
                    }
                }
            }, options);
            observer.observe(element);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [itemsPerRow, eventCount, visibleRows, observerSupported]);

    const filteredEvents = useMemo(() => {
        const tagFilterFn = (item: EventItem) => {
            if (!isValidArray(selectedTags, false)) return true;
            if (!item.tags) return false;

            let hasTags = false;
            for (let i = 0; i < item.tags.length; i++) {
                if (selectedTags.indexOf(item.tags[i].name || '') !== -1) {
                    hasTags = true;
                    break;
                }
            }
            return hasTags;
        };

        let filtered = isValidArray(events) ? [...events] : [];

        // adding filter
        filtered = filtered?.filter(tagFilterFn);
        filtered = filtered?.filter((_, i) => i < visibleRows * itemsPerRow);

        return filtered;
    }, [events, itemsPerRow, selectedTags, visibleRows]);

    const filteredTags = useMemo(() => {
        return tags?.filter((tag) => tag);
    }, [tags]);

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                {isValidArray(filteredTags, false) && (
                    <TagContainer>
                        {filteredTags.map((tag, i) => (
                            <TagWrapper key={i}>
                                {customTag ? (
                                    customTag({
                                        key: i,
                                        name: tag,
                                        isInverted: isInverted,
                                        isActive:
                                            selectedTags.indexOf(tag) !== -1,
                                        clickHandler: (ev) => {
                                            ev?.preventDefault();
                                            if (!onTagClick) {
                                                handleTagClick({ name: tag });
                                            } else onTagClick({ name: tag });
                                        },
                                    })
                                ) : (
                                    <Tag
                                        isInverted={isInverted}
                                        onClick={(ev) => {
                                            ev?.preventDefault();
                                            if (!onTagClick) {
                                                handleTagClick({ name: tag });
                                            } else
                                                onTagClick(
                                                    { name: tag },
                                                    false
                                                );
                                        }}
                                        isActive={
                                            selectedTags.indexOf(tag) !== -1
                                        }
                                    >
                                        {tag}
                                    </Tag>
                                )}
                            </TagWrapper>
                        ))}
                    </TagContainer>
                )}
                <Events>
                    {filteredEvents.map((item, i) => (
                        <EventItem
                            key={`${i}_event_${item.title}`}
                            hasBg={hasBg}
                        >
                            <EventBlock
                                {...item}
                                tags={item.tags?.map((tag) => ({
                                    name: tag.name,
                                }))}
                                isInverted={isInverted}
                                onTagClick={(tag) => {
                                    // scroll back to top
                                    setNewPos(0);
                                    if (!onTagClick) {
                                        // if no callback is defined handle filtering on client side inside the component
                                        handleTagClick(
                                            { name: tag.name },
                                            false
                                        );
                                    } else {
                                        onTagClick({ name: tag.name }, true);
                                    }
                                }}
                                customTag={customTag}
                            />
                        </EventItem>
                    ))}
                </Events>
                <div ref={targetRef} />
                {!observerSupported && (
                    <ListFooter>
                        {events && events.length > 0 && (
                            <Copy
                                type="copy"
                                size="medium"
                                isInverted={isInverted}
                            >
                                <ShowMore
                                    itemCount={events.length}
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        if (
                                            visibleRows <
                                            Math.ceil(eventCount / itemsPerRow)
                                        ) {
                                            setVisibleRows((prev) => prev + 1);
                                        }
                                    }}
                                >
                                    {visibleRows < eventCount / itemsPerRow && (
                                        <Pointer.View
                                            as="button"
                                            isInverted={isInverted}
                                        >
                                            <Pointer.Label>
                                                {showMoreText ||
                                                    'mehr anzeigen'}
                                            </Pointer.Label>
                                        </Pointer.View>
                                    )}
                                </ShowMore>
                            </Copy>
                        )}
                    </ListFooter>
                )}
            </Wrapper>
        </Section>
    );
};

export const EventOverviewComponent = EventOverview;
export default withLibTheme(EventOverview);
