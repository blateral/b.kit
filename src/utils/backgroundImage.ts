export const getBgImage = (
    bgImage: {
        small: string;
        medium?: string;
        semilarge?: string;
        large?: string;
        xlarge?: string;
    },
    mq?: 'small' | 'medium' | 'semilarge' | 'large' | 'xlarge'
): string => {
    switch (mq) {
        default:
        case 'small':
            return bgImage.small;

        case 'medium':
            return (
                bgImage.medium ||
                bgImage.semilarge ||
                bgImage.large ||
                bgImage.xlarge ||
                bgImage.small
            );

        case 'semilarge':
            return (
                bgImage.semilarge ||
                bgImage.large ||
                bgImage.xlarge ||
                bgImage.medium ||
                bgImage.small
            );

        case 'large':
            return (
                bgImage.large ||
                bgImage.xlarge ||
                bgImage.semilarge ||
                bgImage.medium ||
                bgImage.small
            );

        case 'xlarge':
            return (
                bgImage.xlarge ||
                bgImage.large ||
                bgImage.semilarge ||
                bgImage.medium ||
                bgImage.small
            );
    }
};
