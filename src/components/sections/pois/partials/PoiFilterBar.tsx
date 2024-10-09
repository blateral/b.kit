import CrossBubble from 'components/base/icons/CrossBubble';
import Filter from 'components/base/icons/Filter';
import Magnifier from 'components/base/icons/Magnifier';
import FilterBar, { FilterBarProps } from 'components/blocks/FilterBar';
import React, { FC } from 'react';

const PoiFilterBar: FC<FilterBarProps & { className?: string }> = ({
    hasBorders,
    value,
    onChange,
    textFilter,
    categoryFilter,
    mobileSubmitLabel,
    closeIcon,
    toggleLabel,
    filterIcon,
    className,
}) => {
    return (
        <FilterBar
            hasBorders={hasBorders}
            value={value}
            onChange={onChange}
            textFilter={
                textFilter
                    ? {
                          placeholder: textFilter.placeholder || 'Search...',
                          icon: textFilter.icon
                              ? textFilter.icon
                              : () => <Magnifier width={18} height={18} />,
                          submitIcon: textFilter.submitIcon
                              ? textFilter.submitIcon
                              : () => null,
                          clearIcon: textFilter.clearIcon
                              ? textFilter.clearIcon
                              : () => <CrossBubble />,
                      }
                    : undefined
            }
            categoryFilter={
                categoryFilter
                    ? {
                          label: categoryFilter.label || 'Categories',
                          items: categoryFilter.items || [],
                          resetLabel:
                              categoryFilter.resetLabel || 'reset selection',
                      }
                    : undefined
            }
            mobileSubmitLabel={mobileSubmitLabel || 'Apply filters'}
            closeIcon={closeIcon ? closeIcon : () => <CrossBubble />}
            toggleLabel={toggleLabel || 'Search & Filter'}
            filterIcon={filterIcon ? filterIcon : () => <Filter />}
            className={className}
        />
    );
};

export default PoiFilterBar;
