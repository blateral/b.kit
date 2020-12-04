interface PosterImage {
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
}
export declare const canUseWebP: () => boolean;
export declare type PosterMq = 'small' | 'medium' | 'semilarge' | 'large' | 'xlarge';
export declare const usePoster: (posterImage: PosterImage & {
    webp?: PosterImage;
}, mqs?: ("small" | "large" | "medium" | "semilarge" | "xlarge")[] | undefined) => string | undefined;
export {};
//# sourceMappingURL=usePoster.d.ts.map