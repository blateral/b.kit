export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer I>
        ? Array<RecursivePartial<I>>
        : RecursivePartial<T[P]>;
};

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

// eslint-disable-next-line @typescript-eslint/ban-types
export type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U;
