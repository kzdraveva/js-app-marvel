import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Firebase initialization
// -----------------------
const firebaseConfig = {
  apiKey: 'AIzaSyDcwwqnLBoHoncAe3r7TO7HCM-vVp2u6cw',
  authDomain: 'js-marvel-app.firebaseapp.com',
  projectId: 'js-marvel-app',
  storageBucket: 'js-marvel-app.appspot.com',
  messagingSenderId: '539129003779',
  appId: '1:539129003779:web:b9e6b6222396a183d37336',
  measurementId: 'G-T9R77YC8V1',
  databaseURL:
    'https://js-marvel-app-default-rtdb.europe-west1.firebasedatabase.app',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;
