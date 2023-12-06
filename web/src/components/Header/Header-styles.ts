import { styled } from '@mui/material/styles';

const PREFIX = 'Header';

const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  iconTitle: `${PREFIX}-iconTitle`,
  icon: `${PREFIX}-icon`,
  actionItems: `${PREFIX}-actionItems`,
};

export const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 64,
  paddingLeft: '16px',
  paddingRight: '16px',
  [`& .${classes.appBar}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
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
  [`& .${classes.actionItems}`]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default classes;
