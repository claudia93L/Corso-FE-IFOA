import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ButtonComponent from '../src/components/ButtonComponent';
import ImageComponent from '../src/components/ImageComponent';
import ButtonSecondary from '../src/components/ButtonSecondary';
import ButtonFromParent from '../src/components/ButtonFromParent';
import ImageFromParent from '../src/components/ImageFromParent';

function App() {
  const [count, setCount] = useState(0);

  const imageSrc =
    'https://static.vecteezy.com/system/resources/thumbnails/013/078/569/small/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png';
  const imageAlt = 'Un gattino in posa';

  let btnText = 'Testo da genitore';

  return (
    <>
      <h1>Prime prove React props</h1>
      <div className='card'>
        <ButtonComponent></ButtonComponent>
        <ButtonSecondary textContent='Soluzione alternativa'></ButtonSecondary>
        <ButtonFromParent testo={btnText}></ButtonFromParent>
        <ImageComponent></ImageComponent>
        <ImageFromParent src={imageSrc} alt={imageAlt}></ImageFromParent>
      </div>
    </>
  );
}

export default App;
