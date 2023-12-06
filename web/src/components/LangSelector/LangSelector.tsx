import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';

import FormSelection from '../FormSelection';
import { NEWS_FILTER } from '../../utils/common';
import { RootState } from '../../store/store';
import { updateNewsLanguage } from '../../store/news/reducerSlice';
import { updateDirection } from '../../store/theme/reducerSlice';

const LangSelector = () => {
  const dispatch = useDispatch<any>();
  const language: string = useSelector((state: RootState) => state.news.filter.language);

  const getSelectedNewsLanguageHandler = (event: SelectChangeEvent<unknown>) => {
    const language = event.target.value as string;
    dispatch(updateNewsLanguage({ language }));
    dispatch(updateDirection());
  };

  return (
    <FormSelection
      title="Language"
      value={language}
      options={NEWS_FILTER.languages}
      onChange={getSelectedNewsLanguageHandler}
    />
  );
};

export default LangSelector;
