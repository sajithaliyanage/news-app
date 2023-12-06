export type Filter = {
    query: string;
    language: string;
    page: number;
    pageSize: number;
    sortBy: string | undefined;
}

export type NewsFilter = {
    topics: Topic[];
    languages: Language[];
}

export type Topic = {
    type: string;
    label: string;
}

export type Language = {
    type: string;
    label: string;
}
