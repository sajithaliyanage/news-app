import { useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem } from '@mui/material';

import NewsLabels from '../NewsLabels';
import NewsCard from '../NewsCard';
import MoreResults from '../MoreResults';
import NoResults from '../NoResults';
import LazyProgress from '../LazyProgress';
import { Article } from '../../types/article';
import { Pagination } from '../../types/newsState';
import { Filter } from '../../types/filter';
import { RootState } from '../../store/store';
import { getNewsByQuery } from '../../store/news/thunks';

const NewsLists = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const totalResults: number = useSelector((state: RootState) => state.news.totalResults);
  const isBusy: boolean = useSelector((state: RootState) => state.news.isBusy);
  const isMoreLoading: boolean = useSelector((state: RootState) => state.news.isMoreLoading);
  const articles: Article[] = useSelector((state: RootState) => state.news.articles);
  const pagination: Pagination = useSelector((state: RootState) => state.news.pagination);
  const { query, language, page, pageSize, sortBy }: Filter = useSelector(
    (state: RootState) => state.news.filter
  );

  useEffect(() => {
    dispatch(
      getNewsByQuery({
        query: query,
        language: language,
        page: page,
        pageSize: pageSize,
        sortBy: sortBy,
      })
    );
  }, [dispatch, query, language, page, pageSize, sortBy]);

  if (articles.length === 0 && !isBusy) {
    return <NoResults />;
  }

  if (isBusy && !isMoreLoading) {
    return <LazyProgress />;
  }

  return (
    <>
      <NewsLabels totalCount={totalResults} topic={query} loadedCount={articles.length} />
      <List component="ul" aria-label="news results" style={{ width: '100%' }}>
        {articles.map((article, index) => (
          <ListItem key={index}>
            <NewsCard article={article} />
          </ListItem>
        ))}
      </List>
      {pagination.next && <MoreResults />}
    </>
  );
};

export default NewsLists;
