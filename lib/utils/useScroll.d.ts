export declare enum ScrollDirection {
    UP = 0,
    DOWN = 1
}
export declare const useScroll: (topOffset?: number, onLeftOffset?: (() => void) | undefined, onEnterOffset?: (() => void) | undefined) => {
    isTop: boolean;
    isInOffset: boolean;
    scrollDirection: ScrollDirection;
};
//# sourceMappingURL=useScroll.d.ts.map