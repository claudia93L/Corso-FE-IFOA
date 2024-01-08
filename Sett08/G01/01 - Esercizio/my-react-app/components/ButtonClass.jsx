import { Component } from 'react';

// definizione di un componente tramite classe -> sintassi deprecata
class ButtonClass extends Component {
  // il costruttore è necessario per istanziare e inizializzare lo stato
  constructor(props) {
    super(props);
    // utilizziamo l'oggetto state attuale con il count aggiornato
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    // riceviamo lo stato precedente
    this.setState((prevState) => {
      return {
        // ritorna un oggetto che contiene lo stato precedente + 1
        // prevState contiente tutto il codice contenuto in this.state nel costruttore
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <button onClick={this.incrementCount}>
        Il conteggio del ButtonClass è {this.state.count}
      </button>
    );
  }
}

export default ButtonClass;
