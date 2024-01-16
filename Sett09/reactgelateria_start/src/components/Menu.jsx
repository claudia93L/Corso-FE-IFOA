import React, { Component } from 'react';
import { IceCream } from './IceCream';

// endpoint gelati     const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

export class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      isError: false,
      products: [],
      filteredProducts: [],
      selected: 0,
      categories: [],
    };
  }

  filtraProdotti = (category, index) => {
    this.setState({ selected: index });

    if (category === 'Tutti') {
      this.setState({ filteredProducts: this.state.products });
    } else {
      const prodottiFiltrati = this.state.products.filter((el) =>
        el.categoria === category ? el : ''
      );
      this.setState({ filteredProducts: prodottiFiltrati });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ isLoading: true, isError: false });
    const url = 'https://react--course-api.herokuapp.com/api/v1/data/gelateria';
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error('Errore nella richiesta');
      }
      const prod = await resp.json();
      const categories = Array.from(
        new Set(prod.data.map((pr) => pr.categoria))
      );
      categories.unshift('Tutti');

      this.setState({
        products: prod.data,
        filteredProducts: prod.data,
        categories: categories,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <div className='container'>
        <h4 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
          Le Nostre Scelte
        </h4>
        {!this.state.isLoading && !this.state.isError ? (
          <>
            <div className='lista-categorie'>
              {this.state.categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn btn-selector ${
                    this.state.selected === index && 'active'
                  }`}
                  onClick={() => this.filtraProdotti(category, index)}
                >
                  {category}
                </button>
              ))}
            </div>
            <hr />
            <div className='vetrina'>
              {this.state.filteredProducts.map((product) => (
                <IceCream key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : !this.state.isLoading && this.state.isError ? (
          <h4
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Errore...
          </h4>
        ) : (
          <h4
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Caricamento...
          </h4>
        )}
      </div>
    );
  }
}
