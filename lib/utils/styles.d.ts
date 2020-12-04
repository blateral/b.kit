export declare type MediaQueryType = 'small' | 'medium' | 'semilarge' | 'large' | 'xlarge' | 'xxlarge' | 'xxxLarge';
export declare const mq: {
    [key in Exclude<MediaQueryType, 'small'>]: string;
};
export declare const spacings: {
    nudge: number;
    spacer: number;
    wrapper: number;
    wrapperLarge: number;
};
/***** Range Helper *****/
export declare const getSizeByRange: (range: [number, number]) => string;
export declare const withRange: (range: [number, number], property: string) => string;
//# sourceMappingURL=styles.d.ts.map