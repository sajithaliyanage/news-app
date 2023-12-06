import { CardContent, CardMedia, Link, Typography } from '@mui/material';
import { DriveFileRenameOutline as DriveFileRenameOutlineIcon } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { Theme } from '@mui/material/styles';

import { Article } from '../../types/article';
import classes, { StyledCard } from './NewsCard-styles';

type NewsCardProps = {
  article: Article;
};

const NewsCard = (props: NewsCardProps) => {
  const { article } = props;
  const theme: Theme = useTheme();

  const articlePublishedAt: string = new Date(article.publishedAt).toLocaleString();
  const hasNewsImage = !!article.urlToImage;

  return (
    <StyledCard hasImage={hasNewsImage} theme={theme}>
      <CardContent>
        <Typography gutterBottom variant="h6" className={classes.title}>
          <Link href={article.url} target="_blank" underline="hover">
            {article.title}
          </Link>
        </Typography>
        <div className={classes.authorDiv}>
          <DriveFileRenameOutlineIcon fontSize="small" />
          <Typography variant="caption" className={classes.author}>
            {article.author} | {articlePublishedAt}
          </Typography>
        </div>
        <hr className={classes.cardBody} />
        <Typography variant="body2" color="text.secondary" className={classes.cardBody}>
          {article.description}
        </Typography>
      </CardContent>
      {hasNewsImage ? (
        <CardMedia
          component="img"
          loading="lazy"
          className={classes.cardMedia}
          image={article.urlToImage}
          title={article.title}
        />
      ) : null}
    </StyledCard>
  );
};

export default NewsCard;
