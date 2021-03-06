import * as React from 'react';
import { NavLink ,Link} from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import Header from './Header/Header';

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


const Home = props => {
    const theme = useTheme();
    // const navigate=useNavigate();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
    <div>
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
            <ListItem button key={"Home"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
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
          <Link to='/chart'>
            <ListItem button key={"chart"} style={{borderBottom:'none'}}>
              <ListItemIcon>
                <InboxIcon  />
              </ListItemIcon>
              <ListItemText primary={"Chart"} />
            </ListItem>
            </Link>
            {/** */}
            <Link to='/admin'>
            <ListItem button key={"Admin"} style={{borderBottom:'none'}}>
              <ListItemIcon>
                <InboxIcon  />
              </ListItemIcon>
              <ListItemText primary={"Admin"} />
            </ListItem>
            </Link>         
            <Link to='/add-friend'>
            <ListItem button key={"add-friend"} style={{borderBottom:'none'}}>
              <ListItemIcon>
                <InboxIcon  />
              </ListItemIcon>
              <ListItemText primary={"Add-friend"} />
            </ListItem>
            </Link> 
            <Link to='/friend'>
            <ListItem button key={"friend"} style={{borderBottom:'none'}}>
              <ListItemIcon>
                <InboxIcon  />
              </ListItemIcon>
              <ListItemText primary={"Friend"} />
            </ListItem>
            </Link>
             <Link to='/chat'>
            <ListItem button key={"chat"} style={{borderBottom:'none'}}>
              <ListItemIcon>
                <InboxIcon  />
              </ListItemIcon>
              <ListItemText primary={"Chat"} />
            </ListItem>
            </Link>
            <Link to='/chat2'>
            <ListItem button key={"chat2"} style={{borderBottom:'none'}}>
              <ListItemIcon>
                <InboxIcon  />
              </ListItemIcon>
              <ListItemText primary={"Chat-2"} />
            </ListItem>
            </Link>
        </List>
        </List>
      </Drawer>
    </div>
  );
};

export default Home;
