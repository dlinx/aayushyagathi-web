import React, { Component } from 'react';
import { Store, Provider, connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Login } from './components/login/login';
import { Home } from './components/home/home'

class App extends Component {
  render() {
    let page;
    if (this.props.loggedInUser) {
      page = <Home />
    } else {
      page = <Login />
    }
    return (
      <div>
        <Header />
        {page}
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('state', state)
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export default connect(mapStateToProps)(App);
