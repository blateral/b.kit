export var mq = {
    medium: '(min-width: 40em)',
    semilarge: '(min-width: 52em)',
    large: '(min-width: 64em)',
    xlarge: '(min-width: 90em)',
    xxlarge: '(min-width: 105em)',
    xxxLarge: '(min-width: 150em)',
};
export var spacings = {
    nudge: 5,
    spacer: 20,
    wrapper: 1440,
    wrapperLarge: 2400,
};
/***** Range Helper *****/
export var getSizeByRange = function (range) {
    return "calc(" + range[0] + "px + (" + range[1] + " - " + range[0] + ") * ((100vw - 300px) / (" + spacings.wrapperLarge + " - 320)));";
};
export var withRange = function (range, property) {
    if (!property)
        return '';
    return "\n        " + property + ": " + range[0] + "px;\n        " + property + ": " + getSizeByRange(range) + ";\n\n        @media " + mq.xxlarge + " {\n            " + property + ": " + range[1] + "px;\n        }\n    ";
};
//# sourceMappingURL=styles.js.map