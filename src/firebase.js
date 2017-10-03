import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAmD0Wyq0BNAaFMnitS8HU_tUXrkBP4Hbo",
    authDomain: "reminder-pro-b00a1.firebaseapp.com",
    databaseURL: "https://reminder-pro-b00a1.firebaseio.com",
    projectId: "reminder-pro-b00a1",
    storageBucket: "reminder-pro-b00a1.appspot.com",
    messagingSenderId: "939367473670"
};

export const firebaseApp = firebase.initializeApp(config);