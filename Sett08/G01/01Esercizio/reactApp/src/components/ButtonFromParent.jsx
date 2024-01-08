import { useState } from 'react';
import { useEffect } from 'react';

const ButtonFromParent = (props) => {
  const [testo, setText] = useState(props.testo);

  useEffect(() => {
    setText(props.testo);
  }, [props.testo]);

  return <button>{testo}</button>;
};

export default ButtonFromParent;
