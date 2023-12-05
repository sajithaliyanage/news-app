import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import { RootState } from '../../store/store';
import { updateNewsTopic } from '../../store/news/reducerSlice';
import { getNewsByQuery } from '../../store/news/thunks';
import { Pagination } from '../../types/newsState';
import { Filter } from '../../types/filter';
import { NEWS_FILTER } from '../../utils/common';
import { SelectionItem } from '../../types/selectItems';
import classes, { StyledDiv } from './TopicSelector-styles';

const TopicSelector = () => {
  const dispatch = useDispatch<any>();
  const pagination: Pagination = useSelector((state: RootState) => state.news.pagination);
  const filter: Filter = useSelector((state: RootState) => state.news.filter);

  const getSelectedNewsTopicHandler = (value: string) => {
    console.log(value);
    dispatch(updateNewsTopic({ query: value }));
    dispatch(
      getNewsByQuery({
        query: value,
        language: filter.language,
        page: pagination.next ? pagination.next : filter.page,
        pageSize: filter.pageSize,
        sortBy: filter.sortBy,
      })
    );
  };

  return (
    <StyledDiv>
      <div className={classes.container}>
        {NEWS_FILTER.topics.map((item: SelectionItem) => {
          return (
            <Chip
              label={item.label}
              color="primary"
              variant={filter.query === item.type ? 'filled' : 'outlined'}
              onClick={() => getSelectedNewsTopicHandler(item.type)}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default TopicSelector;
