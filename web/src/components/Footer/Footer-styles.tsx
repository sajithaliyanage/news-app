import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Footer';

const classes = {
  root: `${PREFIX}-root`,
};

export const StyledContainer = styled(Container)({
  [`& .${classes.root}`]: {
    textAlign: 'center',
    marginTop: '16',
    marginBottom: '8',
  },
});

export default classes;
