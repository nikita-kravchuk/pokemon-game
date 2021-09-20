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
export const fire = firebase;
export const database = fire.database();

export default database;
