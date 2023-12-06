import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormCntrol = styled(FormControl)({
  height: '100%',
  marginRight: '12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  [`& .MuiInputLabel-root`]: {
    paddingTop: '2px',
  },
  [`& .MuiSelect-root`]: {
    fontSize: '10px',
  }
});

