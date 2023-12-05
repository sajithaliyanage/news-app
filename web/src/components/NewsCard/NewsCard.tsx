import { CardContent, CardMedia, Link, Typography } from '@mui/material';
import { DriveFileRenameOutline as DriveFileRenameOutlineIcon } from '@mui/icons-material';

import { Article } from '../../types/article';
import classes, { StyledCard } from './NewsCard-styles';

interface NewsCardProps {
  article: Article;
}

const NewsCard = (props: NewsCardProps) => {
  const { article } = props;

  const articlePublishedAt: string = new Date(article.publishedAt).toLocaleString();

  return (
    <StyledCard>
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
        <hr />
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        loading="lazy"
        className={classes.cardMedia}
        image={article.urlToImage}
        title={article.title}
      />
    </StyledCard>
  );
};

export default NewsCard;
