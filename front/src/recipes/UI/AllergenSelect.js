import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  StyledEngineProvider,
} from '@mui/material';
import { useState } from 'react';
import sharedClasses from '../../shared/sharedCss.module.css';

const AllergenSelect = () => {
  const [selectedAllergen, setSelectedAllergen] = useState('');

  return (
    <StyledEngineProvider injectFirst>
      <FormControl
        fullWidth
        className={sharedClasses.filterSelect}
        size="small"
      >
        <InputLabel id="select-allergen-label">ALLERGEN</InputLabel>
        <Select
          labelId="select-allergen-label"
          id="select-allergen"
          label="Select an allergen to exclude"
          value={selectedAllergen}
          onChange={(event) => {
            console.log(event.target.value);
            setSelectedAllergen(event.target.value);
          }}
        >
            <MenuItem value="Soy">Soy</MenuItem>
            <MenuItem value="Gluten">Gluten</MenuItem>
            <MenuItem value="Nuts">Nuts</MenuItem>
            <MenuItem value="Sesame">Sesame</MenuItem>
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default AllergenSelect;
