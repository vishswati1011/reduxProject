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
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Component/Home/Home';
import Admin from './Component/Admin/Admin';
import Employee from './Component/Home/Employee';
import Chart from './Component/Chart';
import Chat from './Component/chat/chat'
import Chat2 from './Component/chat1/chat'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SignInForm from './LoginSignup/SignInForm';
import SignUpForm from './LoginSignup/SignUpForm';
import SideBar from './Pages/SideBar';
import Friend from './Component/Friend/friend';
import AddFriend from './Component/Friend/add-friend';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
console.log("token",localStorage.getItem("token"))
 const  MiniDrawer=()=> {
  return (
    <div className='App'>
  {localStorage.getItem('token') ? (
    <Router>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
        <Routes>
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/admin' element={<Admin/>} />
          <Route exact path='/chart' element={<Chart/>} />
          <Route exact path='/chat' element={<Chat/>} />

          <Route exact path='/friend' element={<Friend/>} />
          <Route exact path='/chat2/:userid' element={<Chat2/>} />

          <Route exact path='/add-friend' element={<AddFriend/>} />

      </Routes>
      </Box>
    </Box>
    </Router>
        ):( 
     <Router>
        <Routes>
          <Route exact path='/' element={<SignInForm/>} />
          <Route exact path='/register' element={<SignUpForm/>} />
          <Route exact path='/email-varification' element={<SignInForm/>} />

        </Routes>
      </Router>
         )} 
        </div>
  );
}
export default MiniDrawer;
