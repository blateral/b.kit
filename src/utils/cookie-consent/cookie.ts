export interface Cookie<T> {
    name: string;
    data: T;
}

export const setCookie = <T>({
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

    // set cookie value
    let valueString = '';
    const dataKeys = Object.keys(data);
    for (let i = 0; i < dataKeys.length; i++) {
        valueString += `${dataKeys[i]}:${data[dataKeys[i]]}|`;
    }

    cookieString += encodeURIComponent(
        valueString.substr(0, valueString.length - 1)
    );

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

export const getCookie = <T>(name: string): Cookie<T> | undefined => {
    let cookie = undefined;

    // get cookie value
    const b = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    let cookieValue = b ? b.pop() : '';
    cookieValue = cookieValue ? decodeURIComponent(cookieValue) : '';

    if (cookieValue) {
        const valueArray = cookieValue.split('|').map((el) => {
            const keyValueArray = el.split(':');
            return {
                key: keyValueArray[0],
                value: keyValueArray[1],
            };
        });

        const cookieData: { [k: string]: any } = {};
        for (let i = 0; i < valueArray.length; i++) {
            const value: any = valueArray[i].value;

            // checking for right types
            if (!isNaN(Number(value)))
                cookieData[valueArray[i].key] = Number(value) as number;
            else if (isBoolean(value))
                cookieData[valueArray[i].key] = stringToBoolean(
                    value
                ) as boolean;
            else cookieData[valueArray[i].key] = value as string;
        }

        cookie = {
            name: name,
            data: cookieData as T,
        } as Cookie<T>;
    }
    return cookie;
};

export const deleteCookie = (name: string) => {
    setCookie<any>({ name, data: {} });
};

const stringToBoolean = (value: string | number | boolean) => {
    return [true, 'true', 'True', 'TRUE', '1', 1].indexOf(value) > -1;
};

const isBoolean = (value: string | number | boolean) => {
    return value === 'true' || value === 'false';
};

const isNaN = (value: number) => {
    if (Number.isNaN !== undefined) return Number.isNaN(value);
    else return value !== value;
};
