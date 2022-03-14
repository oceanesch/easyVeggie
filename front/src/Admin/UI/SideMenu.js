import React, { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import classes from './SideMenu.module.css';

const SideMenu = () => {
  const [openNestedMenu, setOpenNestedMenu] = useState({
    openNutritionalNestedMenu: false,
    openRecipeNestedMenu: false,
    openArticleNestedMenu: false,
    openUserNestedMenu: false,
  });

  const toggleNestedNutritionalRecordsHandler = () => {
    setOpenNestedMenu((prevState) => {
      return {
        ...prevState,
        openNutritionalNestedMenu: !prevState.openNutritionalNestedMenu,
      };
    });
  };

  const toggleNestedRecipesHandler = () => {
    setOpenNestedMenu((prevState) => {
      return {
        ...prevState,
        openRecipeNestedMenu: !prevState.openRecipeNestedMenu,
      };
    });
  };

  const toggleNestedArticlesHandler = () => {
    setOpenNestedMenu((prevState) => {
      return {
        ...prevState,
        openArticleNestedMenu: !prevState.openArticleNestedMenu,
      };
    });
  };

  const menu = [
    {
      key: 1,
      primaryName: 'NUTRITIONAL RECORDS',
      nestedList1: 'Nutritional records list',
      nestedList2: 'Add a new nutritional record',
      toggleFunction: toggleNestedNutritionalRecordsHandler,
      state: openNestedMenu.openNutritionalNestedMenu,
    },
    {
      key: 2,
      primaryName: 'RECIPES',
      nestedList1: 'Recipes list',
      nestedList2: 'Add a new recipe',
      toggleFunction: toggleNestedRecipesHandler,
      state: openNestedMenu.openRecipeNestedMenu,
    },
    {
      key: 3,
      primaryName: 'ARTICLES',
      nestedList1: 'Articles list',
      nestedList2: 'Add a new article',
      toggleFunction: toggleNestedArticlesHandler,
      state: openNestedMenu.openArticleNestedMenu,
    },
  ];

  return (
    <StyledEngineProvider injectFirst>
      <Drawer anchor="left" variant="permanent">
        <List>
          {menu.map((menuItem) => {
            return (
              <div key={menuItem.key} className={classes.sideMenuButton}>
                <ListItemButton onClick={menuItem.toggleFunction}>
                  <ListItemText
                    primary={menuItem.primaryName}
                    className={classes.sideMenuText}
                  />
                  {menuItem.state ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={menuItem.state} timeout="auto" unmountOnExit>
                  <List>
                    <ListItemButton>
                      <ListItemText
                        primary={menuItem.nestedList1}
                        className={`${classes.sideMenuText} ${classes.nestedListItem}`}
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText
                        primary={menuItem.nestedList2}
                        className={`${classes.sideMenuText} ${classes.nestedListItem}`}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </div>
            );
          })}
          <ListItemButton>
            <ListItemText
              primary="MANAGE USER"
              className={classes.sideMenuText}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </StyledEngineProvider>
  );
};

export default SideMenu;
