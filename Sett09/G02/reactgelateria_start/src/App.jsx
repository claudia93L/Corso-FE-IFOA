import React, { Component } from 'react';
import { Menu } from './components/Menu';

// endpoint gelati     const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

class App extends React.Component {
  render() {
    return (
      <>
        <div className='App'>
          <section className='section-center'>
            <h3>Gelateria Tutto-Ciocco</h3>
            <Menu></Menu>
          </section>
        </div>
      </>
    );
  }
}

export default App;
