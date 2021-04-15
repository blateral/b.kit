import { weekDays, monthNames } from './data';

interface DateReplacementHolder {
    [key: string]: () => string;
}

export class StatusFormatter {
    private timestamp: number;
    private input: string;
    private dateFormat: string;
    private timeFormat: string;

    private localeKey: string;
    private date: Date;

    constructor(
        timestamp: number,
        input: string,
        dateFormat: string,
        timeFormat: string,
        localeKey?: string
    ) {
        this.timestamp = timestamp;
        this.input = input;
        this.dateFormat = dateFormat;
        this.timeFormat = timeFormat;

        this.localeKey = localeKey ? localeKey : 'de';
        this.date = new Date(this.timestamp);
    }

    private dateReplacements: DateReplacementHolder = {
        dddd: () => {
            return weekDays[this.localeKey].long[this.date.getDay()];
        },
        DDDD: () => {
            return weekDays[this.localeKey].long[this.date.getDay()];
        },
        ddd: () => {
            return weekDays[this.localeKey].short[this.date.getDay()];
        },
        DDD: () => {
            return weekDays[this.localeKey].short[this.date.getDay()];
        },
        dd: () => {
            return this.getDay();
        },
        DD: () => {
            return this.getDay();
        },
        MMMM: () => {
            return monthNames[this.localeKey].long[this.date.getMonth()];
        },
        mmmm: () => {
            return monthNames[this.localeKey].long[this.date.getMonth()];
        },
        MMM: () => {
            return monthNames[this.localeKey].short[this.date.getMonth()];
        },
        mmm: () => {
            return monthNames[this.localeKey].short[this.date.getMonth()];
        },
        mm: () => {
            return this.getMonth();
        },
        MM: () => {
            return this.getMonth();
        },
        yyyy: () => {
            return this.getYear();
        },
        YYYY: () => {
            return this.getYear();
        },
        yy: () => {
            return this.getYear().substr(-2);
        },
        YY: () => {
            return this.getYear().substr(-2);
        },
    };

    private timeReplacements: DateReplacementHolder = {
        hh: () => {
            return this.getHours();
        },
        HH: () => {
            return this.getHours();
        },
        hs: () => {
            return this.getHours12h();
        },
        HS: () => {
            return this.getHours12h();
        },
        mm: () => {
            return this.getMinutes();
        },
        MM: () => {
            return this.getMinutes();
        },
        ss: () => {
            return this.getSeconds();
        },
        SS: () => {
            return this.getSeconds();
        },
        ap: () => {
            const hours = this.date.getHours();
            return hours >= 12 ? 'pm' : 'am';
        },
        AP: () => {
            const hours = this.date.getHours();
            return hours >= 12 ? 'PM' : 'AM';
        },
    };

    public setDate(timestamp: number) {
        this.date = new Date(timestamp);
    }

    public setLocale(localeKey: string) {
        this.localeKey = localeKey;
    }

    public getFormattedStatus() {
        const placeholders: {
            [key: string]: any;
        } = {
            '%DATE%': this.getFormattedDate(),
            '%TIME%': this.getFormattedTime(),
        };

        const formattedInput = this.input.replace(/%\w+%/g, (foundString) => {
            return placeholders[foundString] || foundString;
        });
        return formattedInput;
    }

    public getFormattedDate() {
        // replace placeholders with values from dateReplacements object
        const dataKeys = Object.keys(this.dateReplacements);
        let formattedDate = this.dateFormat;
        for (let i = 0; i < dataKeys.length; i++) {
            formattedDate = formattedDate.replace(
                new RegExp(dataKeys[i], 'g'),
                (foundString) => {
                    return this.dateReplacements[foundString].call(this);
                }
            );
        }
        return formattedDate;
    }

    public getFormattedTime() {
        // replace placeholders with values from timeReplacements object
        const dataKeys = Object.keys(this.timeReplacements);
        let formattedTime = this.timeFormat;
        for (let i = 0; i < dataKeys.length; i++) {
            formattedTime = formattedTime.replace(
                new RegExp(dataKeys[i], 'g'),
                (foundString) => {
                    return this.timeReplacements[foundString].call(this);
                }
            );
        }
        return formattedTime;
    }

    private getDoubleDigitString(value: number) {
        return value < 10 ? '0' + value.toString() : value.toString();
    }

    private getDay() {
        return this.getDoubleDigitString(this.date.getDate());
    }

    private getMonth() {
        return this.getDoubleDigitString(this.date.getMonth() + 1);
    }

    private getYear() {
        return this.date.getFullYear().toString();
    }

    private getHours() {
        return this.getDoubleDigitString(this.date.getHours());
    }

    private getHours12h() {
        let hours = this.date.getHours();
        hours = hours % 12;
        hours = hours === 0 ? 12 : hours;
        return this.getDoubleDigitString(hours);
    }

    private getMinutes() {
        return this.getDoubleDigitString(this.date.getMinutes());
    }

    private getSeconds() {
        return this.getDoubleDigitString(this.date.getSeconds());
    }
}
