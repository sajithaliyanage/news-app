import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'NewsCards';

const classes = {
  cardContent: `${PREFIX}-cardContent`,
  title: `${PREFIX}-title`,
  authorDiv: `${PREFIX}-authorDiv`,
  author: `${PREFIX}-author`,
  cardMedia: `${PREFIX}-cardMedia`,
};

export const StyledCard = styled(Card)({
  width: '100%',
  display: 'flex',
  height: 200,
  [`& .MuiCardContent-root`]: {
    width: '60%',
  },
  [`& .${classes.title}`]: {
    lineHeight: '1.2',
    fontWeight: '400'
  },
  [`& .${classes.authorDiv}`]: {
    display: 'flex',
    alignItems: 'center'
  },
  [`& .${classes.author}`]: {
    marginLeft: '5px'
  },
  [`& .${classes.cardMedia}`]: {
    width: '40%',
    objectFit: 'cover',
  },
});

export default classes;
