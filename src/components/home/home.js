import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui'

const styles = theme => ({

});

class HomeComponent extends Component {
  render() {
    return (
      <div>
        Home Component
      </div>
    );
  }
}

const homeWithStyle = withStyles(styles)(HomeComponent);

function mapStateToProps(state) {
  console.log('state', state)
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export const Home = connect(mapStateToProps)(homeWithStyle);
