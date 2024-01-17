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
        <div className='mx-5'>
          <div className='people-list'>
            <List
              data={this.state.appointments}
              removeAppointment={this.removeAppointment}
            />
          </div>
          <div className='btn-group'>
            <div className='w-100 d-flex justify-content-between'>
              <button className='btn btn-reset w-25' onClick={this.reloadList}>
                Reload list
              </button>
              <button
                className='btn btn-delete w-25'
                onClick={() => this.setState({ appointments: [] })}
              >
                Delete all
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
