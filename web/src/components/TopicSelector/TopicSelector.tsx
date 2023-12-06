import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import { RootState } from '../../store/store';
import { updateNewsTopic } from '../../store/news/reducerSlice';
import { Filter } from '../../types/filter';
import { NEWS_FILTER } from '../../utils/common';
import { SelectionItem } from '../../types/selectItems';
import { StyledDiv } from './TopicSelector-styles';

const TopicSelector = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const filter: Filter = useSelector((state: RootState) => state.news.filter);

  const getSelectedNewsTopicHandler = (value: string) => {
    dispatch(updateNewsTopic({ query: value }));
  };

  return (
    <StyledDiv>
      {NEWS_FILTER.topics.map((item: SelectionItem, index: number) => {
        return (
          <Chip
            key={index}
            label={item.label}
            color="primary"
            variant={filter.query === item.type ? 'filled' : 'outlined'}
            onClick={() => getSelectedNewsTopicHandler(item.type)}
          />
        );
      })}
    </StyledDiv>
  );
};

export default TopicSelector;
