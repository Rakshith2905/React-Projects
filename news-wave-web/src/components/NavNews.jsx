import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './NavNews.css';
import HamburgerMenu from './HamburgerMenu.jsx';

function NavNews({
  setCategory,
  toggleDarkMode,
  setToggleDarkMode,
  darkTheme,
}) {
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'initial' }}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <HamburgerMenu setCategory={setCategory} />
          <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
            NEWSWAVE
          </Typography>
          <div>
            {darkTheme.palette.mode} mode
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleDarkTheme}
              color="inherit"
            >
              {darkTheme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavNews;
