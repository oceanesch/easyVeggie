import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './MainButton.module.css';

import Button from '@mui/material/Button';

export const MainButton = (props) => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Button className={classes.mainButton} type={props.type || null}>
          {props.children}
        </Button>
      </StyledEngineProvider>
    </React.Fragment>
  );
};
