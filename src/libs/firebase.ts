import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {
  firebaseApiKey,
  firebaseAppId,
  firebaseAuthDomain,
  firebaseDatabaseUrl,
  firebaseMeasurmentId,
  firebaseMessagingSenderId,
  firebaseProjectId,
  firebaseStorageBucket,
} from '../constants/global';

// Firebase initialization
// -----------------------
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
  measurementId: firebaseMeasurmentId,
  databaseURL: firebaseDatabaseUrl,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;
