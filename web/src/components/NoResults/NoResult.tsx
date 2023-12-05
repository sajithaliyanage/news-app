import { Cancel as CancelIcon } from '@mui/icons-material';
import { CardContent, Typography } from '@mui/material';

import classes, { StyledCard } from './NoResults-styles';

const NoResults = () => {
  return (
    <StyledCard variant="outlined">
      <CardContent className={classes.cardContent}>
        <CancelIcon fontSize="large" />
        <Typography className={classes.typography}>No news articles found.</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default NoResults;
