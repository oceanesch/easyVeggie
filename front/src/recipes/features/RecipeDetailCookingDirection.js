import {
  Grid,
  List,
  ListItem,
  ListItemText,
  StyledEngineProvider,
  Typography,
} from '@mui/material';
import { MainButton } from '../../shared';
import { Link as RouterLink } from 'react-router-dom';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './RecipeDetailCookingDirection.module.css';

const DUMMY_RECIPE_DETAIL = {
  directions: [
    '1. Prepare the leek by cutting off the root and the overly fibrous green top. This can be discarded or saved for homemade vegetable stock. Cut the leek in half, wash in between the layers, and then thinly slice.',
    '2. Place a large pan over high heat and add the oil. Once hot, add the leek, onion, garlic, and salt, and cook for about 7 minutes, or until there is no moisture in the pan and the leeks have softened.',
    '3. Next, add the spinach, crushed bouillon, thyme, parsley, and pepper and cook for about 2 minutes, or until the spinach is wilted and no moisture remains in the pan. Note if the mixture is too wet, the inside of the quiche can become soggy. Turn off the heat.',
    '4. Grease a 9½ inch (25 cm) round tart pan, and lay the puff pastry dough in the pan. Gently press the pastry down and up along the sides, just over 1 inch (3 cm) in height.',
    '5. Use a fork to poke holes in the bottom of the dough and sprinkle the breadcrumbs along the base. Then preheat the oven to 390°F (200°C).',
    '6. Ensure that the tofu is sufficiently drained and pressed. If the tofu is too wet, the inside of the quiche can become soggy. To a food processor add the tofu, lemon juice, nutritional yeast, cornstarch, mustard, turmeric, and kala namak salt. Blend until completely smooth. Stop and scrape down the sides as needed.',
    '7.Add the blended tofu mixture to the vegetables in the pan and mix together.',
    '8. Transfer the mixture from the pan to the tart pan and spread it out evenly. Rollover any excess pastry dough around the rim to create a crust.',
    '9. Place the halved tomatoes on top, cut side up, and bake on the centre rack of the preheated oven for 35 - 40 minutes, or until the crust is slightly golden and the top is firm to the touch.',
    '10. Let the quiche cool off for at least 10 minutes before slicing. This time allows the quiche to firm up so it can be cut more cleanly. Enjoy!',
  ],
};

const RecipeDetailCookingDirection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.recipeDetailDirectionSection}>
        <Grid item>
          <Typography component="h1" className={sharedClasses.subTitle}>
            DIRECTIONS
          </Typography>
        </Grid>
        <Grid item>
          <List>
            {DUMMY_RECIPE_DETAIL.directions.map((direction, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText
                    inset
                    disableTypography
                    className={sharedClasses.mainText}
                  >
                    {direction}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
          <Grid item className={classes.recipeDetailActionButton}>
            <RouterLink to="/recipes" className={sharedClasses.noLink}>
              <MainButton>BACK TO RECIPES</MainButton>
            </RouterLink>
          </Grid>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default RecipeDetailCookingDirection;
