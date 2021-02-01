import firebase from 'firebase/app';
import 'firebase/firestore';

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

console.log(API_KEY, AUTH_DOMAIN, STORAGE_BUCKET);

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export default firebase;
