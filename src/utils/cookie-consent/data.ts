export interface WeekDays {
    [key: string]: {
        long: string[];
        short: string[];
    };
}

export interface MonthNames {
    [key: string]: {
        long: string[];
        short: string[];
    };
}

export const weekDays: WeekDays = {
    de: {
        long: [
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
            "Sonntag"
        ],
        short: ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."]
    },
    en: {
        long: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        short: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
    }
};

export const monthNames: MonthNames = {
    de: {
        long: [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember"
        ],
        short: [
            "Jan.",
            "Febr.",
            "März",
            "Apr.",
            "Mai",
            "Juni",
            "Juli",
            "Aug.",
            "Sept.",
            "Okt.",
            "Nov.",
            "Dez"
        ]
    },
    en: {
        long: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        short: [
            "Jan.",
            "Feb.",
            "Mar.",
            "Apr.",
            "May",
            "June",
            "July",
            "Aug.",
            "Sept.",
            "Oct.",
            "Nov.",
            "Dec."
        ]
    }
};
