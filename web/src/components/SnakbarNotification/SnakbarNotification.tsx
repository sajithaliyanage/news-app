import { useDispatch, useSelector } from 'react-redux';
import { Alert, Snackbar } from '@mui/material';
import { RootState } from '../../store/store';
import { hideErrorAlert } from '../../store/news/reducerSlice';

const SnakbarNotification = () => {
  const dispatch = useDispatch<any>();
  const error: string | unknown = useSelector((state: RootState) => state.news.error);
  const showError: boolean = useSelector((state: RootState) => state.news.showError);

  const hideAlertHandler = () => {
    dispatch(hideErrorAlert());
  };

  return (
    <Snackbar
      open={showError}
      autoHideDuration={4000}
      message={error as string}
      onClose={hideAlertHandler}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}>
      <Alert variant="filled" severity="error" onClose={hideAlertHandler}>
        {error as string}
      </Alert>
    </Snackbar>
  );
};

export default SnakbarNotification;
