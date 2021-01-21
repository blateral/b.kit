export const generateItemList = <Item>(
    itemToRepeat: Item,
    durations = 1,
    onBuild?: (item: Item, index: number) => Item
) => {
    const itemList: Item[] = [];

    for (let i = 0; i < durations; i++) {
        let newItem: Item = { ...itemToRepeat };
        if (onBuild) newItem = onBuild(newItem, i);
        itemList.push(newItem);
    }
    return itemList;
};
