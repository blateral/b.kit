import React, { FC } from 'react';
import styled from 'styled-components';

import Filter from 'components/base/icons/Filter';

import { Checkbox } from 'fields';
import { Copy } from 'typography';
import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
} from 'utils/styles';
import Magnifier from 'components/base/icons/Magnifier';
import Cross from 'components/base/icons/Cross';
import { Pointer } from 'buttons';
import AngleRight from 'components/base/icons/AngleRight';
import AngleDown from 'components/base/icons/AngleDown';

const FilterView = styled.div`
    @media ${mq.medium} {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;

        & > * + * {
            margin-right: ${spacings.nudge}px;
        }
    }
`;

const FilterHead = styled(Copy)`
    margin-bottom: ${spacings.nudge * 3}px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media ${mq.medium} {
        display: none;
        margin-bottom: 0;
    }
`;

const CloseButton = styled.div`
    cursor: pointer;
`;

const SearchContainer = styled(Copy)`
    position: relative;
    border: 1px solid ${({ theme }) => color(theme).elementBg.dark};
    border-radius: ${spacings.nudge}px;
    background: ${({ theme }) => color(theme).elementBg.light};

    padding: ${spacings.nudge}px ${spacings.nudge * 1.5}px;

    display: flex;
    flex-direction: row;
    align-items: center;

    height: 45px;
    max-height: 45px;

    min-width: 250px;

    margin-bottom: ${spacings.spacer}px;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media ${mq.medium} {
        margin-bottom: 0;
    }
`;

const SearchInput = styled.input<{ hasValue?: boolean }>`
    border: none;
    outline: none;
    width: ${({ hasValue }) => (hasValue ? 'calc(100% - 60px)' : '100%')};

    font-size: ${({ theme }) => font(theme).copy.medium.size}px;
`;

const DropdownHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 45px;
    max-height: 45px;

    min-width: 250px;

    border: 1px solid ${({ theme }) => color(theme).elementBg.dark};
    border-radius: ${spacings.nudge}px;
    background: ${({ theme }) => color(theme).elementBg.light};

    padding: ${spacings.nudge}px ${spacings.nudge * 1.5}px;

    cursor: pointer;
`;

const HeadContent = styled(Copy)`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const HeadAside = styled(Copy)`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const Counter = styled(Copy)`
    position: relative;
    background: ${({ theme }) => color(theme).text.default};
    color: ${({ theme }) => color(theme).text.inverted};

    max-height: 20px;
    max-width: 20px;

    height: 20px;
    width: 20px;

    border-radius: 50px;

    margin-left: ${spacings.nudge * 2}px;

    & > * {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }
`;

const DropdownBody = styled.div<{ isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

    border: 1px solid ${({ theme }) => color(theme).elementBg.dark};
    border-radius: ${spacings.nudge}px;
    background: ${({ theme }) => color(theme).elementBg.light};

    margin-top: 2px;
    padding: ${spacings.nudge}px ${spacings.nudge * 1.5}px;

    @media ${mq.medium} {
        position: absolute;
        min-width: 250px;
    }
`;

const Reset = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
`;

const Clear = styled.div`
    cursor: pointer;
    position: absolute;
    right: ${spacings.nudge * 2}px;

    svg {
        height: 24px;
        width: 24px;
    }
`;

export interface FilterProps {
    label?: string;
    dropdownLabel?: string;
    categories?: {
        value: Record<string, string>;
        label: string;
    }[];
    selectedCount?: number;
    searchValue?: string;
    onClose?: () => void;
    onReset?: () => void;
}

const FilterBar: FC<FilterProps> = ({
    selectedCount,
    dropdownLabel,
    categories,
    searchValue,
    label,
    onClose,
    onReset,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [search, setSearch] = React.useState(searchValue);
    return (
        <FilterView>
            <FilterHead type="copy-b" size="big">
                <span>{label}</span>
                <CloseButton onClick={onClose}>
                    <Cross />
                </CloseButton>
            </FilterHead>
            <SearchContainer>
                <Magnifier />
                <SearchInput
                    hasValue={!!search}
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                {search && search.length > 0 && (
                    <Clear onClick={() => setSearch('')}>
                        <Cross />
                    </Clear>
                )}
            </SearchContainer>
            {categories && (
                <div>
                    <DropdownHead
                        onClick={() =>
                            isOpen ? setIsOpen(false) : setIsOpen(true)
                        }
                    >
                        <HeadContent>
                            <Filter />
                            <div>{dropdownLabel}</div>
                        </HeadContent>
                        <HeadAside>
                            <Counter>
                                <span>{selectedCount}</span>
                            </Counter>
                            <AngleDown />
                        </HeadAside>
                    </DropdownHead>
                    <DropdownBody isVisible={isOpen}>
                        {categories &&
                            categories.map((cat, i) => {
                                return (
                                    <div key={i}>
                                        <Checkbox label={cat.label} />
                                    </div>
                                );
                            })}
                        <Reset size="small" onClick={onReset}>
                            zurücksetzen
                        </Reset>
                    </DropdownBody>
                </div>
            )}
        </FilterView>
    );
};

const FilterContainer = styled.div``;

const FilterButton = styled.button`
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);

    width: 250px;
    height: 45px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${spacings.nudge}px ${spacings.nudge * 1.5}px;

    background: ${({ theme }) => color(theme).elementBg.light};

    border: none;
    border-radius: ${spacings.nudge}px;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media ${mq.medium} {
        display: none;
    }
`;

const MobileView = styled.div<{ isVisible: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

    height: 65vh;
    background-color: ${({ theme }) => color(theme).elementBg.light};
    position: absolute;
    bottom: 0;
    width: 100%;

    border-radius: ${spacings.nudge}px;

    padding: ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        display: none;
    }
`;

const Backdrop = styled.div`
    position: absolute;
    height: 100vh;
    opacity: 0.8;
    background: ${({ theme }) => color(theme).elementBg.light};
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    @media ${mq.medium} {
        display: none;
    }
`;

const DesktopView = styled.div`
    display: none;

    @media ${mq.medium} {
        display: block;
    }
`;

const SubmitPointer = styled(Pointer.View)`
    margin-top: ${spacings.nudge * 3}px;
`;

const ButtonContent = styled(Copy)`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const POIFilter: FC<{ filter: FilterProps }> = ({ filter }) => {
    filter.selectedCount = 0;
    const [mobileVisible, setMobileVisible] = React.useState(false);

    return (
        <FilterContainer>
            <FilterButton onClick={() => setMobileVisible(!mobileVisible)}>
                <Filter />
                <Copy>{filter.label}</Copy>
                <ButtonContent>
                    <Counter>
                        <span>{filter.selectedCount}</span>
                    </Counter>
                    <AngleDown />
                </ButtonContent>
            </FilterButton>
            {mobileVisible && <Backdrop />}
            <MobileView isVisible={mobileVisible}>
                <FilterBar
                    {...filter}
                    onClose={() => setMobileVisible(false)}
                />
                <SubmitPointer>
                    <Pointer.Label>Suche & Filter anwenden</Pointer.Label>
                    <Pointer.Icon>
                        <AngleRight />
                    </Pointer.Icon>
                </SubmitPointer>
            </MobileView>
            <DesktopView>
                <FilterBar {...filter} />
            </DesktopView>
        </FilterContainer>
    );
};

export default POIFilter;
