import { Card } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

const PREFIX = 'NewsCards';

const classes = {
  cardContent: `${PREFIX}-cardContent`,
  title: `${PREFIX}-title`,
  authorDiv: `${PREFIX}-authorDiv`,
  author: `${PREFIX}-author`,
  cardMedia: `${PREFIX}-cardMedia`,
  cardBody: `${PREFIX}-cardBody`,
};

export const StyledCard = styled(Card, { shouldForwardProp: (prop) => prop !== 'hasImage' })(({ hasImage, theme }: { hasImage: boolean, theme: Theme, }) => ({
  width: '100%',
  display: 'flex',
  height: 200,
  [theme.breakpoints.down("xs")]: {
    fontSize: "1px !important"
  },
  [`& .MuiCardContent-root`]: {
    width: hasImage ? '60%' : '100%',
  },
  [`& .${classes.title}`]: {
    lineHeight: '1.2',
    fontWeight: '400',
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px"
    }
  },
  [`& .${classes.authorDiv}`]: {
    display: 'flex',
    alignItems: 'center',
  },
  [`& .${classes.author}`]: {
    marginLeft: '5px'
  },
  [`& .${classes.cardMedia}`]: {
    width: '40%',
    objectFit: 'cover',
  },
  [`& .${classes.cardBody}`]: {
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  },
}));

export default classes;
