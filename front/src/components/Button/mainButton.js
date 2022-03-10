import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './mainButton.module.css';

import Button from '@mui/material/Button';

const mainButton = (props) => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Button className={classes.mainButton}>{props.children}</Button>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default mainButton;
