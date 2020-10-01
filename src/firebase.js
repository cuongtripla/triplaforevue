import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC5Cfi5C813_zvMPyuiTZx9rFjucRYLdEE',
  authDomain: 'triplaforeva.firebaseapp.com',
  databaseURL: 'https://triplaforeva.firebaseio.com',
  projectId: 'triplaforeva',
  storageBucket: 'triplaforeva.appspot.com',
  messagingSenderId: '69159057675',
  appId: '1:69159057675:web:84a51f14b3aaec4bfb4a0e',
  measurementId: 'G-V9YD366SB0',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
