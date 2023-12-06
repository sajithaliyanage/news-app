import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import classes, { StyledDiv } from './MoreResults-styles';
import { RootState } from '../../store/store';
import { updatePagination } from '../../store/news/reducerSlice';

const MoreResults = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const isMoreLoading: boolean = useSelector((state: RootState) => state.news.isMoreLoading);

  const moreArticlesHandler = () => {
    dispatch(updatePagination({ isMoreLoading: true }));
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
