import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'NoResults';

const classes = {
  typography: `${PREFIX}-typography`,
  cardContent: `${PREFIX}-cardContent`,
};

export const StyledCard = styled(Card)({
  width: '100%',
  marginTop: '10px',
  height: '160px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [`& .${classes.cardContent}`]: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  [`& .${classes.typography}`]: {
    marginTop: '5px',
  }
});

export default classes;