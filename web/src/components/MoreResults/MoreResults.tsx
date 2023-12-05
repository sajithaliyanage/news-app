import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import classes, { StyledDiv } from './MoreResults-styles';
import { RootState } from '../../store/store';
import { getNewsByQuery } from '../../store/news/thunks';
import { updatePagination } from '../../store/news/reducerSlice';
import { Pagination } from '../../types/newsState';
import { Filter } from '../../types/filter';

const MoreResults = () => {
  const dispatch = useDispatch<any>();
  const filter: Filter = useSelector((state: RootState) => state.news.filter);
  const pagination: Pagination = useSelector((state: RootState) => state.news.pagination);
  const isMoreLoading: boolean = useSelector((state: RootState) => state.news.isMoreLoading);

  const moreArticlesHandler = () => {
    dispatch(updatePagination({ isMoreLoading: true }));
    dispatch(
      getNewsByQuery({
        query: filter.query,
        language: filter.language,
        page: pagination.next ? pagination.next : filter.page,
        pageSize: filter.pageSize,
        sortBy: filter.sortBy,
      })
    );
  };

  return (
    <StyledDiv>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={moreArticlesHandler}>
        {isMoreLoading ? 'Loading ...' : 'More Articles'}
      </Button>
    </StyledDiv>
  );
};

export default MoreResults;
