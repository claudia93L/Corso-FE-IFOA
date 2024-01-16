import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from '../src/components/List.jsx';
import data from '../data.jsx';
import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appointments: data,
    };
  }

  reloadList = () => {
    this.setState({
      appointments: data,
    });
  };

  removeAppointment = (id) => {
    this.setState((prevState) => ({
      appointments: prevState.appointments.filter((el) => el.id !== id),
    }));
  };

  render() {
    return (
      <>
        <div className='container'>
          <h1>Prossimi appuntamenti</h1>
        </div>
        <div className='people-list'>
          <List
            data={this.state.appointments}
            removeAppointment={this.removeAppointment}
          />
        </div>
        <div className='btn-group'>
          <button className='btn btn-reset' onClick={this.reloadList}>
            Reload list
          </button>
          <button
            className='btn btn-delete'
            onClick={() => this.setState({ appointments: [] })}
          >
            Delete all
          </button>
        </div>
      </>
    );
  }
}

export default App;
