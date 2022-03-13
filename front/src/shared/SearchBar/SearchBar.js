import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import classes from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <TextField
      id="search-bar"
      label="Search everything"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
        className: classes.outlinedSearchBar,
      }}
      className={classes.searchBar}
    />
  );
};
