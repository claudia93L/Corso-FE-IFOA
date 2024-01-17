import React, { Component } from 'react';
import SingleAppointment from './SingleAppointment';

class List extends React.Component {
  render() {
    return (
      <>
        <ul className='user-list'>
          {this.props.data.map((item) => (
            <li key={item.id}>
              <SingleAppointment
                item={item}
                removeAppointment={this.props.removeAppointment}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default List;
