import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'LazyProgress';

const classes = {
  root: `${PREFIX}-root`,
  LoadingLabel: `${PREFIX}-LoadingLabel`,
};

export const StyledContainer = styled(Container)({
  [`& .${classes.root}`]: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  [`& .${classes.LoadingLabel}`]: {
    marginTop: '16',
  },
});

export default classes;
