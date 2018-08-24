import React, { Component } from 'react';
import './App.css';
import MainLayout from "./Components/MainLayout";
import SecondLayout from "./Components/SecondLayout";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import AdminPage from "./Components/AdminPage";
import LogIn from "./Components/LogIn";
import Market from "./Components/Market";
import Cart from "./Components/Cart";
import Library from "./Components/Library";
import BookInfo from './Components/BookInfo';

const AppRoute = ({Component, Layout, ...rest}) => (
        <Route {...rest} render={props=> (
          <Layout>
            <Component {...props}/>
          </Layout>
        )}/>
)

class App extends Component {
  render() {
    return(
      <Router>
          <div>
            <AppRoute exact path="/" Layout={MainLayout} Component={HomePage}/>
            <AppRoute exact path="/Sign-up" Layout={MainLayout} Component={SignUpPage} />
            <AppRoute exact path="/Log-in" Layout={MainLayout} Component={LogIn} />
            <AppRoute exact path="/Market" Layout={MainLayout} Component={Market} />
            <AppRoute exact path="/Cart" Layout={MainLayout} Component={Cart} />
            <AppRoute exact path="/Admin" Layout={SecondLayout} Component={AdminPage} />
            <AppRoute exact path="/Library" Layout={MainLayout} Component={Library} />
            <AppRoute exact path="/Book" Layout={MainLayout} Component={BookInfo} />
          </div>
      </Router>
    );
  }
}

export default App;