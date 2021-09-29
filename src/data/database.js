import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhX8BdU3SRgUQrUroWLAwJuOAovC4hbuA",
  authDomain: "pokemon-game-1d880.firebaseapp.com",
  databaseURL:
    "https://pokemon-game-1d880-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game-1d880",
  storageBucket: "pokemon-game-1d880.appspot.com",
  messagingSenderId: "876570193840",
  appId: "1:876570193840:web:fb1aa84a8f44e079aeb075",
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    });
  };

  offPokemonSoket = () => {
    this.database.ref("pokemons").off();
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val());
  };

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  addPokemon = (data) => {
    const newKey = this.database.ref().child("pokemons").push().key;
    this.database
      .ref("pokemons/" + newKey)
      .set(data);
  };
}

const FirebaseClass = new Firebase();

export default FirebaseClass;
