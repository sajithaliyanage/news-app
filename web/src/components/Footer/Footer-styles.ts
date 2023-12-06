import { styled } from '@mui/material/styles';

export const StyledDiv = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(1),
  paddingBottom: theme.spacing(1)
}));
