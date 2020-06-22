import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig ={
    apiKey: "AIzaSyDV5XqywrHotaC0O6JHtRyHykwrc8f9LnQ",
    authDomain: "messenger-app-70b70.firebaseapp.com",
    databaseURL: "https://messenger-app-70b70.firebaseio.com",
    projectId: "messenger-app-70b70",
    storageBucket: "messenger-app-70b70.appspot.com",
    messagingSenderId: "299547838511",
    appId: "1:299547838511:web:cd1f22806d6dd200909eda"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;