import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Layout';

const classes = {
  container: `${PREFIX}-container`,
};

export const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  [`& .${classes.container}`]: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default classes;
