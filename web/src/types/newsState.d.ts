import { Article } from './article';
import { Filter } from './filter';

export type Pagination = {
    next: number | null;
    prev: number | null;
}

export type NewsState = {
    filter: Filter;
    articles: Article[];
    noResults: boolean;
    pagination: Pagination;
    totalResults: number;
    error: unknown;
    isBusy: boolean;
    isMoreLoading: boolean;
}
