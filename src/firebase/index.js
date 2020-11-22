import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyDOx5QMJFEFkY_wHmLRepAnxvz1QTCZNJE",
        authDomain: "keepit-8a486.firebaseapp.com",
        databaseURL: "https://keepit-8a486.firebaseio.com",
        projectId: "keepit-8a486",
        storageBucket: "keepit-8a486.appspot.com",
        messagingSenderId: "38635769152",
        appId: "1:38635769152:web:cf9eb21505844dc44e7ea5",
        measurementId: "G-QG994SC7M0"
      
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;