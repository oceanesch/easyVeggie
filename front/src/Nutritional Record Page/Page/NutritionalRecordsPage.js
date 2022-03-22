import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordsPage.module.css';
import { SearchBar } from '../../shared';

const NutritionalRecordsPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS
        </Typography>
        <Grid item className={sharedClasses.searchSection}>
          <SearchBar />
        </Grid>
        <Grid container className={classes.filterSection}>
          <Grid item>
            <Typography component="h2" className={sharedClasses.subTitle}>
              FILTER BY CATEGORY OF FOOD
            </Typography>
            <FormControl fullWidth className={classes.filterSelect}>
              <InputLabel id="select-category-food-label">
                Select a category of food
              </InputLabel>
              <Select
                labelId="select-category-food-label"
                id="select-category-food"
                label="Select a category of food"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              >
                <MenuItem>Beans & Legumes</MenuItem>
                <MenuItem>Fruits</MenuItem>
                <MenuItem>Grains</MenuItem>
                <MenuItem>Nuts</MenuItem>
                <MenuItem>Seeds</MenuItem>
                <MenuItem>Soy Product</MenuItem>
                <MenuItem>Spices</MenuItem>
                <MenuItem>Vegetables</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Typography component="h2" className={sharedClasses.subTitle}>
              FILTER BY NUTRIENT
            </Typography>
            <FormControl fullWidth className={classes.filterSelect}>
              <InputLabel id="select-nutrient-label">
                Select a nutrient
              </InputLabel>
              <Select
                labelId="select-nutrient-label"
                id="select-nutrient"
                label="Select a nutrient"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              >
                <MenuItem>Calcium</MenuItem>
                <MenuItem>Cholesterol</MenuItem>
                <MenuItem>Fat</MenuItem>
                <MenuItem>Fiber</MenuItem>
                <MenuItem>Iron</MenuItem>
                <MenuItem>Potassium</MenuItem>
                <MenuItem>Protein</MenuItem>
                <MenuItem>Sodium</MenuItem>
                <MenuItem>Sugar</MenuItem>
                <MenuItem>Vitamin</MenuItem>
                <MenuItem>Zinc</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsPage;
