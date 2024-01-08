import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from '/components/Button';
import ButtonClass from '/components/ButtonClass';
import { useEffect } from 'react';

function App() {
  // creo una variabile, che sarà utilizzata nei componenti -> props
  // count={initialCounter} passo la proprietà dichiarat qui, il componente genitore
  const initialCounter = 0;

  let newTitle = '';

  // callback function che otterrà i dati del titolo dal componente figlio
  // data è diventato il testo al click del button.jsx
  const retrievePageTitle = (data) => {
    newTitle = data;
  };

  // useEffect senza dipendenze = triggerato al primo render del componente
  // rileva il cambiamento del titolo
  useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button
          count={initialCounter}
          changePageTitle={retrievePageTitle}
        ></Button>
        <ButtonClass count={initialCounter}></ButtonClass>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
