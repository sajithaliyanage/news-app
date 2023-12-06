import axios from 'axios';

const getResponseStatus = (status: number | undefined): string => {
    switch (status) {
        case 404:
            return "Resource not found"
        case 429:
            return "Resource rate limit reached"
        default:
            return "Ops, something went wrong"
    }
}

export const getAPIErrorMessage = (error: any, defaultMessage = "Ops, something went wrong"): string => {
    if (axios.isAxiosError(error)) {
        return getResponseStatus(error.response?.status);
    }
    return defaultMessage;
}
