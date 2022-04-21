import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './CancelButton.module.css';

import Button from '@mui/material/Button';

export const CancelButton = (props) => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Button
          className={classes.cancelButton}
          type={props.type || null}
          component={props.component || null}
          onClick={props.onClick}
        >
          {props.children}
        </Button>
      </StyledEngineProvider>
    </React.Fragment>
  );
};