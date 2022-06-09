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
          <MenuItem value={'breakfast'}>Breakfast</MenuItem>
          <MenuItem value={'beverage'}>Hot & Cold Beverage</MenuItem>
          <MenuItem value={'smoothie'}>Smoothie</MenuItem>
          <MenuItem value={'sideDish'}>Side Dish</MenuItem>
          <MenuItem value={'mainMeal'}>Main Meal</MenuItem>
          <MenuItem value={'dessert'}>Dessert</MenuItem>
          <MenuItem value={'salad'}>Salad</MenuItem>
          <MenuItem value={'soup'}>Soup</MenuItem>
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default RecipeTypeSelect;
