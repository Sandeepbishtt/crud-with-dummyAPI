import React from 'react';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PrivateRoute from './Route/PrivateRoute';
import Dashboard from './Components/Dashboard';
import axios from 'axios';
import NewUser from './Components/NewUser';
function App() {
  axios.defaults.headers.common['app-id'] = "61a707bc11e15c3a21eb6666";
  return (
    <BrowserRouter>
    <h2 style={{textAlign:'center'}}> CRUD using DummyAPI </h2>
    <Routes>
      <Route path='/'  element={<Login/>}/>
      <Route path='/dashboard'  element={<PrivateRoute component={Dashboard}/>}/>
      <Route path='/NewUser'  element={<NewUser/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
