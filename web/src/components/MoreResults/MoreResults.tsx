import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import classes, { StyledDiv } from './MoreResults-styles';
import { RootState } from '../../store/store';
import { getNewsByQuery } from '../../store/news/thunks';

const MoreResults = () => {
  const dispatch = useDispatch<any>();
  const isMoreLoading: boolean = useSelector((state: RootState) => state.news.isMoreLoading);

  const moreArticlesHandler = () => {
    dispatch(getNewsByQuery({ query: 'apple', language: 'en', page: 1, pageSize: 10 }));
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
