import firebase from 'firebase';

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDilYtsK2yMxT1l6eYCmTkXZJ2tVIIkkzQ",

    authDomain: "ofortecarvalho.firebaseapp.com",

    projectId: "ofortecarvalho",

    storageBucket: "ofortecarvalho.appspot.com",

    messagingSenderId: "800475757439",

    appId: "1:800475757439:web:956cfd1058688ac090f84a",

    measurementId: "G-0L8MCPEQS2"

  };

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

//firebase.analytics();

//export default firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();