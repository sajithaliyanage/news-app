import { styled } from '@mui/material/styles';

const PREFIX = 'LazyProgress';

const classes = {
  LoadingLabel: `${PREFIX}-LoadingLabel`,
};

export const StyledDiv = styled('div')({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  [`& .${classes.LoadingLabel}`]: {
    marginTop: '16',
  },
});

export default classes;
