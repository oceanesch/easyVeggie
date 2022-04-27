import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import classes from './RecipeCard.module.css';

const RecipeCard = (props) => {
  // Component that will receive the data through props.
  return (
    <Card elevation={0} className={classes.recipeCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.recipeMainImage}
          alt={props.recipeTitle}
          className={classes.recipeCardImage}
        />
        <CardContent className={classes.recipeCardContent}>
          <Typography component="h5" className={classes.recipeCardTitle}>
            {props.recipeTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;
