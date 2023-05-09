export const clampValue = (value: number, min: number, max?: number) => {
    if (max !== undefined && max !== null) {
        return Math.max(min, Math.min(value, max));
    } else {
        return Math.max(value, min);
    }
};
