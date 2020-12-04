export var getBgImage = function (bgImage, mq) {
    switch (mq) {
        default:
        case 'small':
            return bgImage.small;
        case 'medium':
            return (bgImage.medium ||
                bgImage.semilarge ||
                bgImage.large ||
                bgImage.xlarge ||
                bgImage.small);
        case 'semilarge':
            return (bgImage.semilarge ||
                bgImage.large ||
                bgImage.xlarge ||
                bgImage.medium ||
                bgImage.small);
        case 'large':
            return (bgImage.large ||
                bgImage.xlarge ||
                bgImage.semilarge ||
                bgImage.medium ||
                bgImage.small);
        case 'xlarge':
            return (bgImage.xlarge ||
                bgImage.large ||
                bgImage.semilarge ||
                bgImage.medium ||
                bgImage.small);
    }
};
//# sourceMappingURL=backgroundImage.js.map