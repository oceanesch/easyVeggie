import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { ListItem } from '@mui/material';

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
    <SwipeableDrawer
      anchor="left"
      open={openSideMenu}
      onOpen={toggleSideMenuHandler}
      onClose={toggleSideMenuHandler}
      variant="permanent"
    >
      <List>
        {menu.map((menuItem) => {
          return (
            <div key={menuItem.key}>
              <ListItemButton onClick={menuItem.toggleFunction}>
                <ListItemText primary={menuItem.primaryName} />
                {menuItem.state ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={menuItem.state} timeout="auto" unmountOnExit>
                <List>
                  <ListItemButton>
                    <ListItemText primary={menuItem.nestedList1} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary={menuItem.nestedList2} />
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
          );
        })}
        <ListItemButton>
          <ListItemText primary="MANAGE USER" />
        </ListItemButton>
      </List>
    </SwipeableDrawer>
  );
};

export default SideMenu;
