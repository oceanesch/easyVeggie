import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './MainButton.module.css';

import Button from '@mui/material/Button';

const MainButton = (props) => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Button className={classes.mainButton}>{props.children}</Button>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default MainButton;
