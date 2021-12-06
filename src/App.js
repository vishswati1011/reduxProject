// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import Navvbar from './Pages/Navigation/Navvbar';
// import Home from './Pages/Navigation/Home';
// import SignInForm from './LoginSignup/SignInForm';
// import SignUpForm from './LoginSignup/SignUpForm';

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Routes>
//         <Route exact path='/nav' element={<Navvbar/>} />
//           <Route exact path='/home' element={<Home/>} />
//           <Route exact path='/' element={<SignInForm/>} />
//           <Route exact path='/register' element={<SignUpForm/>} />
//       </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;

import * as React from 'react';
import { BrowserRouter as Router, Route,Routes,NavLink ,Link} from 'react-router-dom';
import Home from './Component/Home/Home';
import Admin from './Component/Admin/Admin';
import Employee from './Component/Home/Employee';
// import {useNavigate}  from "react-router";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SignInForm from './LoginSignup/SignInForm';
import SignUpForm from './LoginSignup/SignUpForm';
import Header from './Pages/Header/Header';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 const  MiniDrawer=()=> {

  const theme = useTheme();
  // const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // let navigate = useNavigate();

  return (
    <div className='App'>
       {localStorage.getItem('token') ? (
<Router>
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Header/>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <NavLink to='/home'>
            <ListItem button key={"Mail"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Mail"} />
            </ListItem>
            </NavLink>
        </List>
        <Divider />
        <List>
        <List>
        <NavLink to='/employee'>
        <ListItem button key={"Employee"}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Employee"} />
            </ListItem>
            </NavLink>
          <Link to='/admin'>
            <ListItem button key={"Admin"} style={{borderBottom:'none'}}>
              <ListItemIcon>
                <InboxIcon  />
              </ListItemIcon>
              <ListItemText primary={"Admin"} />
            </ListItem>
            </Link>
        </List>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />

        <Routes>

          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/admin' element={<Admin/>} />
          <Route exact path='/employee' element={<Employee/>} />
          
      </Routes>

      </Box>
    </Box>
    </Router>
       ):(
    <Router>
      <Routes>
    <Route exact path='/' element={<SignInForm/>} />
          <Route exact path='/register' element={<SignUpForm/>} />
          </Routes>
    </Router>
       )}
         </div>

  );
}
export default MiniDrawer;
