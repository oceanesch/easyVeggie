import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const SideMenu = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
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

  const toggleSideMenuHandler = () => {
    setOpenSideMenu(!setOpenSideMenu);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={openSideMenu}
      onOpen={toggleSideMenuHandler}
      onClose={toggleSideMenuHandler}
      variant="permanent"
    >
      <List>
        <ListItemButton onClick={toggleNestedNutritionalRecordsHandler}>
          <ListItemText primary="NUTRITIONAL RECORDS" />
          {openNestedMenu.openNutritionalNestedMenu ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>
        <Collapse
          in={openNestedMenu.openNutritionalNestedMenu}
          timeout="auto"
          unmountOnExit
        >
          <List>
            <ListItemButton>
              <ListItemText primary="Nutritional records list" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Add a new nutritional record" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={toggleNestedRecipesHandler}>
          <ListItemText primary="RECIPES" />
          {openNestedMenu.openRecipeNestedMenu ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>
        <Collapse
          in={openNestedMenu.openRecipeNestedMenu}
          timeout="auto"
          unmountOnExit
        >
          <List>
            <ListItemButton>
              <ListItemText primary="Recipes list" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Add a new recipe" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={toggleNestedArticlesHandler}>
          <ListItemText primary="ARTICLES" />
          {openNestedMenu.openArticleNestedMenu ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>
        <Collapse
          in={openNestedMenu.openArticleNestedMenu}
          timeout="auto"
          unmountOnExit
        >
          <List>
            <ListItemButton>
              <ListItemText primary="Articles List" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Add a new article" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText primary="MANAGE USER" />
        </ListItemButton>
      </List>
    </SwipeableDrawer>
  );
};

export default SideMenu;
