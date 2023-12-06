import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'NoResults';

const classes = {
  typography: `${PREFIX}-typography`,
  cardContent: `${PREFIX}-cardContent`,
};

export const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1.4),
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
    marginTop: theme.spacing(0.6),
  }
}));

export default classes;