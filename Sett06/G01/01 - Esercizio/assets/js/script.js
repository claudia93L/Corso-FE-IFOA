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
const pets = [
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


