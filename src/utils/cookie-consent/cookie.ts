export interface Cookie<T extends object> {
    name: string;
    data: T;
}

export const setCookie = <T extends object>({
    name,
    data,
    days = -1,
    path = '/',
}: {
    name: string;
    data: T;
    days?: number;
    path?: string;
}) => {
    let cookieString = `${name}=`;

    try {
        const stringifiedData = JSON.stringify(data);
        cookieString += encodeURIComponent(stringifiedData);
    } catch (err) {
        console.warn('Cannot save data to cookie!');
    }

    // specify path
    cookieString += `; path=${path};`;

    // check if cookie should have lifetime
    if (days >= 0) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        cookieString += ` expires=${date.toUTCString()};`;
    }
    document.cookie = cookieString;
};

export const getCookie = <T extends object>(
    name: string
): Cookie<T> | undefined => {
    let cookie = undefined;

    try {
        // get cookie value
        const b = document.cookie.match(
            '(^|;)\\s*' + name + '\\s*=\\s*([^;]+)'
        );
        let cookieValue = b ? b.pop() : '';
        cookieValue = cookieValue ? decodeURIComponent(cookieValue) : '';

        if (!cookieValue) return;

        cookie = {
            name: name,
            data: JSON.parse(cookieValue) as T,
        } as Cookie<T>;
    } catch (err) {
        console.warn(err);
    }

    return cookie;
};

export const deleteCookie = (name: string) => {
    setCookie<any>({ name, data: {} });
};
