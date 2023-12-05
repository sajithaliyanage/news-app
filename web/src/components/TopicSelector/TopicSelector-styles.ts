import { styled } from '@mui/material/styles';

const PREFIX = 'TopicSelector';

const classes = {
  container: `${PREFIX}-container`,
};

export const StyledDiv = styled("div")({
  width: '100%',
  marginLeft: '16px',
  marginRight: '16px',
  display: 'flex',
  marginTop: '8px',
  marginBottom: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  [`& ${classes.container}`]: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  [`& .MuiChip-root`]: {
    width: '100px',
    margin: '8px',
  },
});

export default classes;
