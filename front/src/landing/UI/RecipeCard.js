import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  StyledEngineProvider,
  Typography,
} from '@mui/material';
import classes from './RecipeCard.module.css';

const RecipeCard = (props) => {
  return (
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
};

export default RecipeCard;
