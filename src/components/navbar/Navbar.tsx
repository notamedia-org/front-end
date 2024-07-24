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
    <Box sx={{ width: 280 }} onClick={toggleDrawer(false)}>
      <Toolbar>
        <a href='/'>
          <img src={logo} alt='logo' style={{ width: '35px'}}></img>
        </a>
        <a href='/'>
          <Typography variant='h6' sx={{ color: textColor }}>ФСПМО</Typography>
        </a>
      </Toolbar>
      <List>
        {[
          { text: 'Соревнования', href: '/competitions'},
          { text: 'Виды соревнований', href: '/competitions/types'},
          { text: 'Нормативы', href: '/standards'},
          { text: 'Справка', href: '/help'},
        ].map((params) => (
          <ListItem key={params.text} disablePadding>
            <ListItemButton href={params.href}>
              <ListItemText primary={params.text} color={textColor} primaryTypographyProps={{ variant: 'h5' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ marginTop: 0 }}>
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
          <a href='/'>
            <img src={logo} alt='logo' style={{ width: '35px'}}></img>
          </a>
          <a href='/'>
            <Typography variant='h6' sx={{ color: textColor }}>ФСПМО</Typography>
          </a>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button href='/sign-up' sx={{ color: textColor }}>Регистрация</Button>
          <Button href='/sign-in' sx={{ color: textColor }}>Вход</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
