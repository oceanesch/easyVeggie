import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
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
      url1: '/admin/nutritionalrecordslist',
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
      <Drawer variant="permanent">
        <Box className={classes.sideMenu}>
          <RouterLink to="/">
            <img
              alt="logo of the website"
              src="images/logo_easy_veggie_2.png"
              className={classes.logo}
            />
          </RouterLink>
          <List>
            {menu.map((menuItem) => {
              return (
                <div key={menuItem.key} className={classes.sideMenuButton}>
                  <ListItemButton
                    onClick={menuItem.toggleFunction}
                    className={classes.sideMenuText}
                  >
                    <ListItemText
                      primary={menuItem.primaryName}
                      disableTypography={true}
                    />
                    {menuItem.state ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={menuItem.state} timeout="auto" unmountOnExit>
                    <List>
                      <RouterLink to={menuItem.url1}>
                        <ListItemButton>
                          <ListItemText
                            primary={menuItem.nestedList1}
                            className={`${classes.sideMenuText} ${classes.nestedListItem}`}
                            disableTypography={true}
                          />
                        </ListItemButton>
                      </RouterLink>
                      <ListItemButton>
                        <ListItemText
                          primary={menuItem.nestedList2}
                          className={`${classes.sideMenuText} ${classes.nestedListItem}`}
                          disableTypography={true}
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
                disableTypography={true}
              />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </StyledEngineProvider>
  );
};

export default SideMenu;
