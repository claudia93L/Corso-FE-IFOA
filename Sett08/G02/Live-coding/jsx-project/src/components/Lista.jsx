// lista passata come prop da app.jsx al suo componente figlio
// ogni figlio di una lista DEVE avere una prop key unica. qui utilizziamo l'index del giorno dell'array definito su App.jsx, ciclando con map

const Lista = (props) => {
  return (
    <ul>
      {props.giorni.map((giorno, index) => (
        <li key={index}>{giorno}</li>
      ))}
    </ul>
  );
};

export default Lista;
