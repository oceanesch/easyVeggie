import { StyledEngineProvider } from '@mui/material/styles';
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordDetailPage.module.css';

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

      <img
        alt="stack of broccoli"
        src="../../images/image_broccoli.jpg"
        className={classes.foodDetailImage}
      />

      <Typography component="h5" className={classes.foodDetailArrayTitle}>
        NUTRITION FOR: {DUMMY_NUTRITIONAL_VALUES[0].quantity}{' '}
      </Typography>
      <Typography component="p" className={classes.foodDetailArrayText}>
        Calories: {DUMMY_NUTRITIONAL_VALUES[0].calories}{' '}
      </Typography>
      <Divider />

      <Grid container className={classes.foodDetailArrayRow}>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText
                primaryTypographyProps={{classes: classes.foodDetailArrayImportant}}
                primary="Total Fat"
              />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].totalFat}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Saturated Fat" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].saturatedFat}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Unsaturated Fat" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].unsaturatedFat}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Trans Fat" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].transFat}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Cholesterol" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].cholesterol}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Total Carbs" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].totalCarbs}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Dietary Fiber" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].dietaryFiber}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Total Sugars" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].totalSugars}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Protein" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].protein}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Divider />

      <Grid container className={classes.foodDetailArrayRow}>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Sodium" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].sodium}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Iron" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].iron}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Potassium" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].potassium}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Calcium" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].calcium}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Zinc" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].zinc}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Vitamin A" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].vitaminA}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Vitamin B6" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].vitaminB6}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Vitamin B12" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].vitaminB12}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Vitamin C" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].vitaminC}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Vitamin D" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].vitaminD}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Vitamin E" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].vitaminE}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
            <ListItem className={classes.foodDetailArrayItem}>
              <ListItemText primary="Vitamin K" />
              <ListItemText
                primary={DUMMY_NUTRITIONAL_VALUES[0].vitaminK}
                className={classes.foodDetailArrayNutriValue}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordDetailPage;
