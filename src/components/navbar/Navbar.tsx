import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Navbar() {
  const textColor = '#000000';
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Что-то первое', 'Что-то второе', 'Что-то третье', 'Что-то четвертое'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} color={textColor}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <AppBar position="static" sx={{ background: '#FAFBFB' }}>
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: textColor }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt='logo' style={{ width: '35px'}}></img>
          <Typography variant='h6' sx={{ color: textColor }}>ФСПМО</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button  sx={{ color: textColor }}>Регистрация</Button>
          <Button  sx={{ color: textColor }}>Вход</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
