import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormCntrol = styled(FormControl)(({ theme }) => ({
  height: '100%',
  marginRight: theme.spacing(1.2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  [`& .MuiInputLabel-root`]: {
    paddingTop: theme.spacing(0.2),
  }
}));

