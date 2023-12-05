import { NewsFilter } from "../types/filter";
import { Theme } from "../types/theme";

export const THEME: Theme = {
    palettes: {
        light: {
            type: 'light',
            primary: {
                light: '#4791db',
                main: '#1976d2',
                dark: '#115293',
            },
            secondary: {
                light: '#e33371',
                main: '#dc004e',
                dark: '#9a0036',
            },
        },
        dark: {
            type: 'dark',
            primary: {
                light: '#a6d4fa',
                main: '#90caf9',
                dark: '#648dae',
            },
            secondary: {
                light: '#f6a5c0',
                main: '#f48fb1',
                dark: '#aa647b',
            },
        },
    },
};

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

export const toProperCase = (text: string): string => {
    return text.replace(/\w\S*/g, function (matchedText) {
        return matchedText.charAt(0).toUpperCase() + matchedText.substr(1).toLowerCase();
    });
};
