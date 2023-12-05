import { Article } from './article';
import { Filter } from './filter';

export type NewsState = {
    filter: Filter;
    articles: Article[];
    noResults: boolean;
    pagination: any;
    totalResults: number;
    error: any;
    isBusy: boolean;
    isMoreLoading: boolean;
    isPaged: boolean;
}