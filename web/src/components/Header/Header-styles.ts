import { styled } from '@mui/material/styles';

const PREFIX = 'Header';

const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  iconTitle: `${PREFIX}-iconTitle`,
  icon: `${PREFIX}-icon`,
};

export const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 64,
  [`& .${classes.appBar}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  [`& .${classes.iconTitle}`]: {
    display: 'flex',
    flexWrap: 'true',
    fontSize: "20px",
    alignItems: 'center'
  },
  [`& .${classes.icon}`]: {
    marginRight: '10px'
  },
});

export default classes;
