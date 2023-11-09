// 1. Prendiamo il valore dall'input text --> #task
// 2. Il button #btn-add al click dovrà attivare la funzione per l'aggiunta di un task --> addTask()
// 3. Lo scriviamo nel div #container-tasks --> ul --> genererà un elemento li
// 4. All'aggiunta di un elemento, il div #container-tasks rimuoverà la classe --> hidden
// 5. Accanto ad ogni li sarà aggiunto un botton (icona?) per la sua rimozione dalla lista
// 6. Al click del mouse su un elemento li, l'elemento risulterà completato e si mostrerà con una linea orizzontale

let task = document.getElementById('task');
let btnAdd = document.getElementById('btn-add');
let ul = document.querySelector('ul');
let divTask = document.getElementById('container-tasks');

btnAdd.addEventListener('click', function (e) {
  e.preventDefault();

  const taskValue = task.value;

  divTask.classList.remove('hidden');

  const listEl = document.createElement('li');
  ul.appendChild(listEl);
  const btnDel = document.createElement('button');
  ul.appendChild(btnDel);

  listEl.innerText = taskValue;
  btnDel.innerText = 'X';

  task.value = '';
});

/* const liste = document.querySelectorAll('li');

liste.forEach((element) => {}); */
