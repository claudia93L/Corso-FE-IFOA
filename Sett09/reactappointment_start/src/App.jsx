import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from '../src/components/List.jsx';
import data from '../data.jsx';
import React, { Component } from 'react';

class App extends React.Component {
  render() {

    
    /* const [appointments, setAppointments] = useState(data);

  const reloadList = () => {
    setAppointments(data);
  };

  const removeAppointment = (id) => {
    setAppointments((actualAppointments) =>
      actualAppointments.filter((item) => item.id !== id)
    );
  }; */

    return (
      <>
        <div className='container'>
          <h1>Prossimi appuntamenti</h1>
        </div>
        <div className='people-list'>
          <List data={appointments} removeAppointment={removeAppointment} />
        </div>
        <div className='btn-group'>
          <button className='btn btn-reset' onClick={reloadList}>
            Reload list
          </button>
          <button
            className='btn btn-delete'
            onClick={() => setAppointments([])}
          >
            Delete all
          </button>
        </div>
      </>
    );
  }
}

export default App;
