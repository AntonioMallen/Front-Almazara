import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { IoLeaf } from "react-icons/io5";
import {  Link } from "react-router";
import { useAuth } from '../../context/AuthContext';
import '../../Styles/css/navbar/navbar.min.css'
const nombre = "Almazara"

const pages = [
  {name: 'Prueba', web: '/test'},
  {name: 'Contenido', web: '/content'},
];



function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { user, logout } = useAuth(); // Lee el usuario y token

  
  const handleExitUser = (event) => {
    logout()
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  function stringAvatar(name) {
    var children =name.split(' ')[0][0];
    if(name.split(' ').length>1){ // has surname
        children+=`${name.split(' ')[1][0]}`;
    }
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      
      children: `${name.split(' ')[0][0]}`,
    };
  }

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const avatarMenu = [
    {text: 'Prueba', funct: handleExitUser},
    {text: 'Salir', funct: handleExitUser},
  ];
 

  return (
    <div className="navbar-content">
      <AppBar position="static" className='navbar-component'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IoLeaf />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {nombre}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <Link to={page.web} sx={{ color: 'white' }}>{page.name}</Link>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {nombre}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                  <Link to={page.web} sx={{ color: 'white' }}>{page.name}</Link>
              ))}
            </Box>

              {
                user != null ?
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={user?.name} {...stringAvatar(user?.name)} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {avatarMenu.map((menuOption) => (
                        <MenuItem 
                          key={menuOption.text}
                          onClick={menuOption.funct}
                        >
                          <Typography sx={{ textAlign: 'center' }}>{menuOption.text}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                :
                  <div className='navbar-userInfo'>
                    <a className='navbar-login' href='/login'>Iniciar sesión</a>
                    <a className='navbar-register' href='/register'>Registrarse</a>
                  </div>
              }

           
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
