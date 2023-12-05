import { styled } from '@mui/material/styles';

const PREFIX = 'MoreResults';

const classes = {
  button: `${PREFIX}-button`,
};

export const StyledDiv = styled('div')({
  width: "100%",
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingBottom: '16px',
  [`& .${classes.button}`]: {
    width: "100%",
  },
});

export default classes;
