import { useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsByQuery } from '../store/news/thunks';
import LazyProgress from '../components/LazyProgress';
import { RootState } from '../store/store';
import { List, ListItem } from '@mui/material';
import NewsLabels from '../components/NewsLabels';
import { Article } from '../types/article';
import MoreResults from '../components/MoreResults';

const News = () => {
  const dispatch = useDispatch<any>();
  const totalResults: number = useSelector((state: RootState) => state.news.totalResults);
  const isBusy: boolean = useSelector((state: RootState) => state.news.isBusy);
  const isMoreLoading: boolean = useSelector((state: RootState) => state.news.isMoreLoading);
  const articles: Article[] = useSelector((state: RootState) => state.news.articles);

  useEffect(() => {
    dispatch(getNewsByQuery({ query: 'apple', language: 'en', page: 1, pageSize: 10 }));
  }, [dispatch]);

  const content =
    isBusy && !isMoreLoading ? (
      <LazyProgress />
    ) : (
      <>
        <List component="ul" aria-label="news results" style={{ width: '100%' }}>
          <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
            <NewsLabels count={totalResults} topic="apple" />
          </ListItem>
          {articles.map((article, index) => (
            <ListItem key={index}>
              <NewsCard article={article} />
            </ListItem>
          ))}
        </List>
        <MoreResults />
      </>
    );

  return <>{content}</>;
};

export default News;
