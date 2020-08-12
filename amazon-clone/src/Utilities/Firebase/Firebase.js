import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtSZllfs3vcYulWmhMQfX2n9FiqwAzUsw",
    authDomain: "clone-1bfc0.firebaseapp.com",
    databaseURL: "https://clone-1bfc0.firebaseio.com",
    projectId: "clone-1bfc0",
    storageBucket: "clone-1bfc0.appspot.com",
    messagingSenderId: "375786473359",
    appId: "1:375786473359:web:683ef8f6e6d9c405adedfa",
    measurementId: "G-8HNGRB7NMY"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};