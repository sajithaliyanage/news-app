import { styled } from '@mui/material/styles';

export const StyledDiv = styled("div")(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));
