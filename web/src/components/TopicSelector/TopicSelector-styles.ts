import { styled } from '@mui/material/styles';

export const StyledDiv = styled("div")(({ theme }) => ({
  width: '100%',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center',
  [`& .MuiChip-root`]: {
    width: '100px',
    margin: theme.spacing(1),
  },
}));
