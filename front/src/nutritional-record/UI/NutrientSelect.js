import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';

const NutrientSelect = () => {
  const [selectedNutrient, setSelectedNutrient] = useState('');

  return (
    <StyledEngineProvider injectFirst>
      <FormControl
        fullWidth
        className={sharedClasses.filterSelect}
        size="small"
      >
        <InputLabel id="select-nutrient-label">Select a nutrient</InputLabel>
        <Select
          labelId="select-nutrient-label"
          id="select-nutrient"
          label="Select a nutrient"
          value={selectedNutrient}
          onChange={(event) => {
            console.log(event.target.value);
            setSelectedNutrient(event.target.value);
          }}
        >
          <MenuItem value={'Calcium'}>Calcium</MenuItem>
          <MenuItem value={'Cholesterol'}>Cholesterol</MenuItem>
          <MenuItem value={'Fat'}>Fat</MenuItem>
          <MenuItem value={'Fiber'}>Fiber</MenuItem>
          <MenuItem value={'Iron'}>Iron</MenuItem>
          <MenuItem value={'Potassium'}>Potassium</MenuItem>
          <MenuItem value={'Protein'}>Protein</MenuItem>
          <MenuItem value={'Sodium'}>Sodium</MenuItem>
          <MenuItem value={'Sugar'}>Sugar</MenuItem>
          <MenuItem value={'Vitamin'}>Vitamin</MenuItem>
          <MenuItem value={'Zinc'}>Zinc</MenuItem>
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default NutrientSelect;
