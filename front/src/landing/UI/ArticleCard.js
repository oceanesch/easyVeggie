import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  StyledEngineProvider,
  Typography,
} from '@mui/material';
import classes from './ArticleCard.module.css';
import sharedClasses from '../../shared/sharedCss.module.css';

const ArticleCard = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Card className={`${classes.articleBox} ${classes.articleCard}`}>
        <CardActionArea className={classes.articleBox}>
          <CardMedia
            component="img"
            image={props.articleMainImage}
            alt={props.articleTitle}
            className={classes.articleCardImage}
          />
          <CardContent className={classes.articleCardContent}>
            <Typography component="h5" className={classes.articleCardTitle}>
              {props.articleTitle}
            </Typography>
            <Typography component="p" className={sharedClasses.mainText}>
              {props.articleAbstract}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </StyledEngineProvider>
  );
};

export default ArticleCard;
