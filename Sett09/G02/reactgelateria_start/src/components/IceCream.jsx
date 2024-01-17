import React, { Component } from 'react';

export class IceCream extends React.Component {
  render() {
    return (
      <>
        <article className='gelato'>
          <div className='img-container'>
            <img src={this.props.img} alt={this.props.nome} className='img' />
          </div>
          <div className='prd-info'>
            <header className='prd-header'>
              <div>
                <h5>{this.props.nome}</h5>
                <h6>{this.props.categoria}</h6>
              </div>
              <span className='prd-prezzo'>
                <h6>{(this.props.prezzo / 100).toFixed(2)} Euro</h6>
              </span>
            </header>
            <hr />
            <p>{this.props.descrizione}</p>
          </div>
        </article>
      </>
    );
  }
}
