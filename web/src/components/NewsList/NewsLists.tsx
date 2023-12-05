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
import { useEffect } from 'react';
import { getNewsByQuery } from '../../store/news/thunks';

const NewsLists = () => {
  const dispatch = useDispatch<any>();
  const totalResults: number = useSelector((state: RootState) => state.news.totalResults);
  const isBusy: boolean = useSelector((state: RootState) => state.news.isBusy);
  const isMoreLoading: boolean = useSelector((state: RootState) => state.news.isMoreLoading);
  const articles: Article[] = useSelector((state: RootState) => state.news.articles);
  const pagination: Pagination = useSelector((state: RootState) => state.news.pagination);
  const filter: Filter = useSelector((state: RootState) => state.news.filter);

  useEffect(() => {
    dispatch(
      getNewsByQuery({
        query: filter.query,
        language: filter.language,
        page: pagination.next ? pagination.next : filter.page,
        pageSize: filter.pageSize,
        sortBy: filter.sortBy,
      })
    );
  }, [dispatch]);

  if (articles.length === 0 && !isBusy) {
    return <NoResults />;
  }

  if (isBusy && !isMoreLoading) {
    return <LazyProgress />;
  }

  return (
    <>
      <List component="ul" aria-label="news results" style={{ width: '100%' }}>
        <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <NewsLabels
            totalCount={totalResults}
            topic={filter.query}
            loadedCount={articles.length}
          />
        </ListItem>
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
