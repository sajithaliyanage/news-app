import { CircularProgress, Typography } from '@mui/material';
import classes, { StyledContainer } from './LazyProgress-styles';

export const LazyProgress = () => {
  return (
    <StyledContainer>
      <div className={classes.root}>
        <CircularProgress />
        <Typography className={classes.LoadingLabel} variant="body2" color="textSecondary">
          Loading
        </Typography>
      </div>
    </StyledContainer>
  );
};

export default LazyProgress;
