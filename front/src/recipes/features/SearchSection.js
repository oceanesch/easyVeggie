import { StyledEngineProvider } from '@mui/material';
import { SearchBar } from '../../shared';

const SearchSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <SearchBar />
    </StyledEngineProvider>
  );
};

export default SearchSection;
