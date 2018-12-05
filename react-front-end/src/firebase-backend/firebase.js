import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC5xD7SZ0I8FcA2lFL25irvHV45jeT4O6Y",
    authDomain: "capstone-project-d83d7.firebaseapp.com",
    databaseURL: "https://capstone-project-d83d7.firebaseio.com",
    projectId: "capstone-project-d83d7",
    storageBucket: "capstone-project-d83d7.appspot.com",
    messagingSenderId: "964204817298"
};
firebase.initializeApp(config);
const database = firebase.database();


export default database;