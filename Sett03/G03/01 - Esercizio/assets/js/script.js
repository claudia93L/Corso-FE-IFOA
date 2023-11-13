// 1. Prendiamo il valore dall'input text --> #task
// 2. Il button #btn-add al click dovrà attivare la funzione per l'aggiunta di un task --> addTask()
// 3. Lo scriviamo nel div #container-tasks --> ul --> genererà un elemento li
// 4. All'aggiunta di un elemento, il div #container-tasks rimuoverà la classe --> hidden
// 5. Accanto ad ogni li sarà aggiunto un botton (icona?) per la sua rimozione dalla lista
// 6. Al click del mouse su un elemento li, l'elemento risulterà completato e si mostrerà con una linea orizzontale

const addBtn = document.querySelector('#btn-add');
const divTask = document.querySelector('#container-tasks');
let taskList = document.querySelector('#lista-task');
const task = document.querySelector('#task');
const tasks = [];

addBtn.addEventListener('click', function () {
  if (task.value !== '') {
    //addTask();
    createList();
    deleteInput();
  } else {
    alert('Inserire un task nel campo di input!');
    return;
  }
});

const addTask = () => {
  tasks.push(task.value);
};

const createList = () => {
  taskList.innerHTML = '';
  tasks.map((element, index) => {
    let singleTask = document.createElement('li');
    singleTask.style.borderBottom = '1px solid gray';
    singleTask.innerHTML = `${element}`;

    let delBtn = document.createElement('button');
    delBtn.classList.add('button');
    delBtn.innerHTML = 'Elimina';
    delBtn.setAttribute('onclick', `elimina(${index})`);

    singleTask.appendChild(delBtn);

    taskList.appendChild(singleTask);
    showTask();
  });
  barraTask();
};

const showTask = () => {
  divTask.classList.remove('hidden');
};

function deleteInput() {
  task.value = '';
}

function elimina(index) {
  tasks.splice(index, 1);
  createList();
}

function barraTask() {
  const elencoTask = document.querySelectorAll('li');
  elencoTask.forEach((element) => {
    element.onclick = function () {
      element.classList.toggle('barrato');
    };
  });
}
