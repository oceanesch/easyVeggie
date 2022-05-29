import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  StyledEngineProvider,
} from '@mui/material';
import { useState } from 'react';
import sharedClasses from '../../shared/sharedCss.module.css';

const CookingTimeSelect = () => {
  const [selectedCookingTime, setSelectedCookingTime] = useState('');

  return (
    <StyledEngineProvider injectFirst>
      <FormControl
        fullWidth
        className={sharedClasses.filterSelect}
        size="small"
      >
        <InputLabel id="select-cooking-time-label">COOKING TIME</InputLabel>
        <Select
          labelId="select-cooking-time-label"
          id="select-cooking-time"
          label="Select a cooking time"
          value={selectedCookingTime}
          onChange={(event) => {
            console.log(event.target.value);
            setSelectedCookingTime(event.target.value);
          }}
        >
          <MenuItem value={'10 min or less'}>{`10 min or less`}</MenuItem>
          <MenuItem value={'15 min or less'}>{`15 min or less`}</MenuItem>
          <MenuItem value={'20 min or less'}>{`20 min or less`}</MenuItem>
          <MenuItem value={'30 min or less'}>{`30 min or less`}</MenuItem>
          <MenuItem value={'40 min or less'}>{`40 min or less`}</MenuItem>
          <MenuItem value={'50 min or less'}>{`50 min or less`}</MenuItem>
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default CookingTimeSelect;
