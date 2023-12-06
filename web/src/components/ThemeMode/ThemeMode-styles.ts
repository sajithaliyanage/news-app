import { styled } from '@mui/material/styles';

const PREFIX = 'ThemeMode';

const classes = {
  label: `${PREFIX}-label`,
};

export const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [`& .${classes.label}`]: {
    fontWeight: '400',
    fontSize: '12px',
  }
});

export default classes;
