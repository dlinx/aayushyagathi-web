import React, { Component } from 'react';

export class Search extends Component {
  render() {

  }
}

const searchWithStyle = withStyles(styles)(Search);

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export const Home = connect(mapStateToProps)(searchWithStyle);
