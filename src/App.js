import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navvbar from './Pages/Navigation/Navvbar';
import Home from './Pages/Navigation/Home';
import Register from './register';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navvbar/>

        <Routes>

        <Route exact path='/nav' component={Navvbar} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Register} />
      </Routes>
      </Router>
    </div>
  );
}
export default App;