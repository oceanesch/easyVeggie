import { StyledEngineProvider } from '@mui/material/styles';
import { Divider, Grid, List, ListItem, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordDetailPage.module.css';
import NutritionalRecordMainSection from '../Features/NutritionalRecordMainSection';

const DUMMY_NUTRITIONAL_VALUES = [
  {
    quantity: '100g of cooked broccoli',
    calories: '28kcal',
    totalFat: 'tr',
    saturatedFat: 'tr',
    unsaturatedFat: 'tr',
    transFat: 'tr',
    cholesterol: 'tr',
    totalCarbs: '6g',
    dietaryFiber: '2.2g',
    totalSugars: '1g',
    protein: '2.1g',
    sodium: '34mg',
    iron: '0.6mg',
    potassium: '241mg',
    calcium: 'tr',
    zinc: 'n.d',
    vitaminA: '0mg',
    vitaminB6: 'n.d.',
    vitaminB12: '0mcg',
    vitaminC: '53mg',
    vitaminD: 'n.d.',
    vitaminE: '1.03mg',
    vitaminK: '141mcg',
  },
];

const NutritionalRecordDetailPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Grid item>
          <Typography component="h1" className={sharedClasses.mainTitle}>
            NUTRITIONAL RECORD - BROCCOLI
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" className={sharedClasses.mainText}>
            Broccoli are a variety of cabbage originated from Sicily. Broccolis
            are high in water so low in energy but high in other minerals.
            Various different studies have shown that broccolis like other
            brassicaceae are an anti-cancer food. It has a preventive action
            against certain cancer because they are high in fiber and various
            antioxidants. This vegetable can also fight existing cancer and can
            increase the chance of survival.
          </Typography>
        </Grid>
      </Grid>
      <NutritionalRecordMainSection />

      {/* <Grid container className={classes.foodDetailMainSection}>
        <Grid item>
          <img
            alt="stack of broccoli"
            src="../../images/image_broccoli.jpg"
            className={classes.foodDetailImage}
          />
        </Grid>
        <Grid item>
          <Typography component="h5" className={classes.foodDetailArrayTitle}>
            NUTRITION FOR: {DUMMY_NUTRITIONAL_VALUES[0].quantity}{' '}
          </Typography>
          <Typography component="p" className={sharedClasses.mainText}>
            Calories: {DUMMY_NUTRITIONAL_VALUES[0].calories}{' '}
          </Typography>
          <Divider />

          <Grid container className={classes.foodDetailArrayRow}>
            <Grid item className={classes.foodDetailArrayColumn}>
              <List>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography
                    className={`${classes.foodDetailArrayText} ${classes.important}`}
                  >
                    Total Fat
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.important}`}
                  >
                    {DUMMY_NUTRITIONAL_VALUES[0].totalFat}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Saturated Fat
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].saturatedFat}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Unsaturated Fat
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].unsaturatedFat}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Trans Fat
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].transFat}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Cholesterol
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].cholesterol}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item className={classes.foodDetailArrayColumn}>
              <List>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography
                    className={`${classes.foodDetailArrayText} ${classes.important}`}
                  >
                    Total Carbs
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.important}`}
                  >
                    {DUMMY_NUTRITIONAL_VALUES[0].totalCarbs}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Dietary Fiber
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].dietaryFiber}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Total Sugars
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].totalSugars}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography
                    className={`${classes.foodDetailArrayText} ${classes.important}`}
                  >
                    Proteins
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.important}`}
                  >
                    {DUMMY_NUTRITIONAL_VALUES[0].protein}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Divider />

          <Grid container className={classes.foodDetailArrayRow}>
            <Grid item className={classes.foodDetailArrayColumn}>
              <List>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Sodium
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].sodium}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Iron
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].iron}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Potassium
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].potassium}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Calcium
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].calcium}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Zinc
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].zinc}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item className={classes.foodDetailArrayColumn}>
              <List>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Vitamin A
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].vitaminA}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Vitamin B6
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].vitaminB6}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Vitamin B12
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].vitaminB12}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Vitamin C
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].vitaminC}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Vitamin D
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].vitaminD}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Vitamin E
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].vitaminE}
                  </Typography>
                </ListItem>
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={classes.foodDetailArrayText}>
                    Vitamin K
                  </Typography>
                  <Typography className={classes.foodDetailArrayNutriValue}>
                    {DUMMY_NUTRITIONAL_VALUES[0].vitaminK}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </StyledEngineProvider>
  );
};

export default NutritionalRecordDetailPage;
