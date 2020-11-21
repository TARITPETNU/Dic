// import logo from './logo.svg';
// import './App.css';
//import Text from './component/Text';
import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import AddWordPage from './pages/AddWordPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/RegisterPage';
import Homepage from './pages/homepage';

const StyledWrapper = styled.div`
`


function App() {
  return (
    <div className="App">
      <StyledWrapper>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/Addword">AddWord</Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/LoginPage">Login</Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/RegisterPage">RegisterPage</Link>
          </div>
        </div>
        <Switch>
          <Route path="/AddWordPage">
            <AddWordPage />
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/RegisterPage">
            <RegisterPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </StyledWrapper>
    </div>

  );
}

export default App;
