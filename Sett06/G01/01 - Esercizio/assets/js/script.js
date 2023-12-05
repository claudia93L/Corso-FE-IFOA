// ESERCIZIO 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  getOlderUser(age2) {
    if (this.age > age2) {
      console.log(
        `L'utente ${this.firstName} è più vecchio di ${user2.firstName}`
      );
    } else if (this.age === age2) {
      console.log(`Entrambi gli utenti hanno ${this.age} anni`);
    } else {
      console.log(
        `L'utente ${user2.firstName} è più vecchio di ${this.firstName}`
      );
    }
  }
}

const user1 = new User('Mario', 'Rossi', 40, 'Roma');
const user2 = new User('Bruno', 'Verdi', 30, 'Milano');

user1.getOlderUser(user2.age);

// ESERCIZIO 2

// base dati per inserire le options corrette nella select
const speciesAndBreeds = [
  {
    species: 'dog',
    breeds: ['Golden Retriever', 'Rottweiler', 'Samoiedo'],
  },

  {
    species: 'cat',
    breeds: ['European', 'Norwegian', 'Maine Coon'],
  },
  {
    species: 'rabbit',
    breeds: ['Nano', 'Ariete', 'Gigante'],
  },
];

class Pet {
  constructor(petName, ownerName, selectedSpecies, selectedBreed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.selectedSpecies = selectedSpecies;
    this.selectedBreed = selectedBreed;
  }

  checkMatchingOwner(anotherPet) {
    return this.ownerName === anotherPet.ownerName;
  }
}

const petNameInput = document.getElementById('petName');
const ownerNameInput = document.getElementById('ownerName');
let selectedSpeciesSelect = document.getElementById('selectedSpecies');
let selectedBreedSelect = document.getElementById('selectedBreed');
const selectedBreedLabel = document.getElementById('selectedBreedLabel');
const sendButton = document.getElementById('sendButton');
const divSelect = document.getElementById('divSelect');
const ul = document.getElementById('ul');
let pets = [];

// al cambio di opzione sulla select della specie, devo riempire la select della razza con quella attinente alla specie selezionata
// al click del bottone devo: far scomparire il div del form e mostrare quello della lista

sendButton.onclick = () => {
  let petName = petNameInput.value;
  let ownerName = ownerNameInput.value;
  let selectedSpecies = getSpeciesValue();
  let selectedBreed = selectedBreedSelect.value;

  /* console.log(petName);
  console.log(ownerName);
  console.log(selectedSpecies);
  console.log(selectedBreed); */

  clearInputs();
  createPet(petName, ownerName, selectedSpecies, selectedBreed);
};

selectedSpeciesSelect.onchange = () => {
  selectedBreedSelect.innerHTML = '';
  let selectedSpecies = getSpeciesValue();

  speciesAndBreeds.forEach((el) => {
    if (el.species === selectedSpecies) {
      selectedBreedLabel.innerText = `Choose your ${selectedSpecies}'s breed `;

      let option = document.createElement('option');
      option.innerText = `Choose your ${selectedSpecies}'s breed`;
      selectedBreedSelect.appendChild(option);

      el.breeds.forEach((breed) => {
        let breedOption = document.createElement('option');
        breedOption.innerText = breed;
        selectedBreedSelect.appendChild(breedOption);
      });
    }
  });
};

const getSpeciesValue = () => {
  switch (selectedSpeciesSelect.value) {
    case '1':
      return 'dog';
      break;
    case '2':
      return 'cat';
      break;
    case '3':
      return 'rabbit';
      break;
    default:
      return 'valore non valido';
      break;
  }
};

const toggleDiv = (div) => {
  div.classList.toggle('d-none');
};

const clearInputs = () => {
  petNameInput.value = '';
  ownerNameInput.value = '';
  selectedSpeciesSelect.value = '0';
  selectedBreedSelect.value = '';
};

const createPet = (petName, ownerName, selectedSpecies, selectedBreed) => {
  let newPet = new Pet(petName, ownerName, selectedSpecies, selectedBreed);
  pets.push(newPet);
  updatePetList();
};

const updatePetList = () => {
  ul.innerHTML = '';
  pets.forEach((pet) => {
    let li = document.createElement('li');
    li.innerText = `Nome dell'animale: ${pet.petName}, Nome del proprietario: ${pet.ownerName}, Specie: ${pet.selectedSpecies}, Razza: ${pet.selectedBreed}`;
    ul.appendChild(li);
  });
};
