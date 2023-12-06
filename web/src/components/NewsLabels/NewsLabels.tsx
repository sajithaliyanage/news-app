import numeral from 'numeral';
import { Typography } from '@mui/material';

import { StyledDiv } from './NewsLabels-styles';

type NewsLabelProps = {
  loadedCount: number;
  totalCount: number;
  topic: string;
};

const NewsLabels = (props: NewsLabelProps) => {
  const { loadedCount, totalCount } = props;

  return (
    <StyledDiv>
      <Typography>
        Showing {numeral(loadedCount).format('0,0')} out of {numeral(totalCount).format('0,0')}{' '}
        results for the selected topic within the past 7 days
      </Typography>
    </StyledDiv>
  );
};

export default NewsLabels;
