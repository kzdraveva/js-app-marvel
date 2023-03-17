import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDcwwqnLBoHoncAe3r7TO7HCM-vVp2u6cw',
  authDomain: 'js-marvel-app.firebaseapp.com',
  projectId: 'js-marvel-app',
  storageBucket: 'js-marvel-app.appspot.com',
  messagingSenderId: '539129003779',
  appId: '1:539129003779:web:b9e6b6222396a183d37336',
  measurementId: 'G-T9R77YC8V1',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()

export default firebase;
