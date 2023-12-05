import { CircularProgress, Typography } from '@mui/material';
import classes, { StyledDiv } from './LazyProgress-styles';

export const LazyProgress = () => {
  return (
    <StyledDiv>
      <CircularProgress />
      <Typography className={classes.LoadingLabel} variant="body2" color="textSecondary">
        Loading
      </Typography>
    </StyledDiv>
  );
};

export default LazyProgress;
