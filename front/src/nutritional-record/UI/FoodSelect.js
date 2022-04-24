import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';

const FoodSelect = () => {
  const [selectedFood, setSelectedFood] = useState('');

  return (
    <StyledEngineProvider injectFirst>
      <FormControl
        fullWidth
        className={sharedClasses.filterSelect}
        size="small"
      >
        <InputLabel id="select-category-food-label">
          Select a category of food
        </InputLabel>
        <Select
          labelId="select-category-food-label"
          id="select-category-food"
          label="Select a category of food"
          value={selectedFood}
          onChange={(event) => {
            console.log(event.target.value);
            setSelectedFood(event.target.value);
          }}
        >
          <MenuItem value={'Beans & Legumes'}>Beans & Legumes</MenuItem>
          <MenuItem value={'Fruits'}>Fruits</MenuItem>
          <MenuItem value={'Grains'}>Grains</MenuItem>
          <MenuItem value={'Nuts'}>Nuts</MenuItem>
          <MenuItem value={'Seeds'}>Seeds</MenuItem>
          <MenuItem value={'Soy Products'}>Soy Products</MenuItem>
          <MenuItem value={'Spices'}>Spices</MenuItem>
          <MenuItem value={'Vegetables'}>Vegetables</MenuItem>
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default FoodSelect;
