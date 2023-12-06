import { styled } from '@mui/material/styles';

const PREFIX = 'LazyProgress';

const classes = {
  LoadingLabel: `${PREFIX}-LoadingLabel`,
};

export const StyledDiv = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  [`& .${classes.LoadingLabel}`]: {
    marginTop: theme.spacing(2),
  },
}));

export default classes;
