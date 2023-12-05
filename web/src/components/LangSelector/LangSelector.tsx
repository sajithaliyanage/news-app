import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';

import FormSelection from '../FormSelection';
import { NEWS_FILTER } from '../../utils/common';
import { RootState } from '../../store/store';
import { updateNewsLanguage } from '../../store/news/reducerSlice';
import { getNewsByQuery } from '../../store/news/thunks';
import { Pagination } from '../../types/newsState';
import { Filter } from '../../types/filter';

const LangSelector = () => {
  const dispatch = useDispatch<any>();
  const pagination: Pagination = useSelector((state: RootState) => state.news.pagination);
  const filter: Filter = useSelector((state: RootState) => state.news.filter);

  const getSelectedNewsLanguageHandler = (event: SelectChangeEvent<unknown>) => {
    const language = event.target.value as string;
    dispatch(updateNewsLanguage({ language }));
    dispatch(
      getNewsByQuery({
        query: filter.query,
        language: language,
        page: pagination.next ? pagination.next : filter.page,
        pageSize: filter.pageSize,
        sortBy: filter.sortBy,
      })
    );
  };

  return (
    <FormSelection
      title="Language"
      value={filter.language}
      options={NEWS_FILTER.languages}
      onChange={getSelectedNewsLanguageHandler}
    />
  );
};

export default LangSelector;
