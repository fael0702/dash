import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDypjg2Uyq1SQK48b_iw45KYOk76hIMWU0",
  authDomain: "projeto-webiii.firebaseapp.com",
  databaseURL: "https://projeto-webiii-default-rtdb.firebaseio.com",
  projectId: "projeto-webiii",
  storageBucket: "projeto-webiii.appspot.com",
  messagingSenderId: "477121291113",
  appId: "1:477121291113:web:fbb5c2ed7f15d66d6393f8",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
