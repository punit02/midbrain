import React, { Component } from 'react';
import Home from './component/home';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Home />
        </div>

      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    showImage: state.donorRegistration.userLatitude,

  };
}

export default connect(mapStateToProps)(App);
