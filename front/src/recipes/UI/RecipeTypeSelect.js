import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  StyledEngineProvider,
} from '@mui/material';
import { useState } from 'react';
import sharedClasses from '../../shared/sharedCss.module.css';

const RecipeTypeSelect = () => {
  const [selectedRecipeType, setSelectedRecipeType] = useState('');

  return (
    <StyledEngineProvider injectFirst>
      <FormControl
        fullWidth
        className={sharedClasses.filterSelect}
        size="small"
      >
        <InputLabel id="select-type-of-recipe">RECIPE TYPE</InputLabel>
        <Select
          labelId="select-type-of-recipe"
          id="select-type-of-recipe"
          label="Select a type of recipe"
          value={selectedRecipeType}
          onChange={(event) => {
            console.log(event.target.value);
            setSelectedRecipeType(event.target.value);
          }}
        >
          <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
          <MenuItem value={'Hot & Cold Beverage'}>Hot & Cold Beverage</MenuItem>
          <MenuItem value={'Smoothie'}>Smoothie</MenuItem>
          <MenuItem value={'Side Dish'}>Side Dish</MenuItem>
          <MenuItem value={'Main Meal'}>Main Meal</MenuItem>
          <MenuItem value={'Dessert'}>Dessert</MenuItem>
          <MenuItem value={'Salad'}>Salad</MenuItem>
          <MenuItem value={'Soup'}>Soup</MenuItem>
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default RecipeTypeSelect;
