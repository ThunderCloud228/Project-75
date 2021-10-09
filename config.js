import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAO7AhF1kIKl2LuVfh740ZEJnyynqGTvpQ",
  authDomain: "project-75-e92b4.firebaseapp.com",
  projectId: "project-75-e92b4",
  storageBucket: "project-75-e92b4.appspot.com",
  messagingSenderId: "705195324957",
  appId: "1:705195324957:web:73886412454072db1d78f4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
