import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormCntrol = styled(FormControl)({
  minWidth: 120,
  height: '100%',
  marginLeft: '12px',
  '&:last-child': {
    marginRight: 0,
  },
});

