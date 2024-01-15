import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <h1>Prossimi appuntamenti</h1>
      </div>
    </>
  );
}

export default App;
