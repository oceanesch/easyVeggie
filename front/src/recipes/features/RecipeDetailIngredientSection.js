import {
  Box,
  List,
  ListItem,
  ListItemText,
  StyledEngineProvider,
  Typography,
} from '@mui/material';
import classes from './RecipeDetailIngredientSection.module.css';
import sharedClasses from '../../shared/sharedCss.module.css';

const DUMMY_RECIPE_DETAIL = {
  ingredients: [
    '2 medium leeks',
    '1 Tbsp (15 mL) vegetable oil ',
    '1 medium onion, chopped',
    '3 cloves garlic, minced',
    '½ tsp salt',
    '5 cups (150 g) fresh spinach, coarsely chopped',
    '½ vegetable bouillon cube, crushed (optional)',
    '1 tsp (1 g) dried thyme',
    '1 tsp (1 g) dried parsley',
    '½ tsp ground black pepper',
    '9.5 oz (270 g) vegan puff pastry dough',
    '1 Tbsp (7 g) breadcrumbs',
    '22.9 oz (650 g) extra firm tofu',
    '3 Tbsp (45 mL) fresh lemon juice',
    '¼ cup (9 g) nutritional yeast flakes',
    '1 Tbsp (8 g) cornstarch',
    '1 tsp (5 mL) Dijon mustard',
    '1 tsp (3 g) ground turmeric',
    '½ tsp kala namak salt',
    '1 cup (180 g) cherry tomatoes, halved',
  ],
  optionalGarnish: ['chili flakes', 'fresh parsley', 'lemon slices'],
};

const RecipeDetailIngredientSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={classes.recipeDetailIngredientBox}>
        <Typography component="h2" className={sharedClasses.subTitle}>
          INGREDIENTS
        </Typography>
        <List>
          {DUMMY_RECIPE_DETAIL.ingredients.map((ingredient, index) => {
            return (
              <ListItem key={index}>
                <ListItemText
                  inset
                  disableTypography
                  className={sharedClasses.mainText}
                >
                  {ingredient}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
        <Typography component="h2" className={sharedClasses.subTitle}>
          OPTIONAL GARNISH
        </Typography>
        <List>
          {DUMMY_RECIPE_DETAIL.optionalGarnish.map((ingredient, index) => {
            return (
              <ListItem key={index}>
                <ListItemText
                  inset
                  disableTypography
                  className={sharedClasses.mainText}
                >
                  {ingredient}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </StyledEngineProvider>
  );
};

export default RecipeDetailIngredientSection;
