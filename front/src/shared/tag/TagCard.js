import { Chip, StyledEngineProvider } from '@mui/material';
import classes from './TagCard.module.css';

export const TagCard = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Chip label={props.tagName} className={classes.mainTag} />
    </StyledEngineProvider>
  );
};
