import { styled } from '@mui/material/styles';

const PREFIX = 'MoreResults';

const classes = {
  button: `${PREFIX}-button`,
};

export const StyledDiv = styled('div')(({ theme }) => ({
  width: "100%",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [`& .${classes.button}`]: {
    width: "100%",
  },
}));

export default classes;
