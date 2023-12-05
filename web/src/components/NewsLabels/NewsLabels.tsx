import numeral from 'numeral';
import { Typography } from '@mui/material';
import { StyledDiv } from './NewsLabels-styles';

interface NewsLabelProps {
  count: number;
  topic: string;
}

const NewsLabels = (props: NewsLabelProps) => {
  const { count, topic } = props;
  return (
    <StyledDiv>
      <Typography>
        Showing {numeral(10).format('0,0')} out of {numeral(count).format('0,0')} results for the
        selected topic <b>{topic}</b>
      </Typography>
    </StyledDiv>
  );
};

export default NewsLabels;
