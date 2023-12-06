import { NewsFilter } from "../types/filter";

export const THEME_MODES: { LIGHT_MODE: string, DARK_MODE: string } = {
    LIGHT_MODE: 'light',
    DARK_MODE: 'dark',
}

export const NEWS_FILTER: NewsFilter = {
    topics: [
        { type: 'apple', label: 'Apple' },
        { type: 'meta', label: 'Meta' },
        { type: 'netflix', label: 'Netflix' },
        { type: 'google', label: 'Google' },
        { type: 'twitter', label: 'Twitter' },
        { type: 'tesla', label: 'Tesla' },
    ],
    languages: [
        { type: 'en', label: 'English' },
        { type: 'ar', label: 'Arabic' },
    ],
};

export const DIRECTIONS: { LTR_MODE: string, RTL_MODE: string } = {
    LTR_MODE: 'ltr',
    RTL_MODE: 'rtl'
}

export const toProperCase = (text: string): string => {
    return text.replace(/\w\S*/g, function (matchedText) {
        return matchedText.charAt(0).toUpperCase() + matchedText.substr(1).toLowerCase();
    });
};
