import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1ZRldKNJsjeb8iZa91_PbdesvCJYsb3c",
  authDomain: "eureka-react.firebaseapp.com",
  projectId: "eureka-react",
  storageBucket: "eureka-react.appspot.com",
  messagingSenderId: "270353555921",
  appId: "1:270353555921:web:c0b08cc92d2a2bf9e780f0"
};

const app = initializeApp(firebaseConfig);

 const firestoreDB = getFirestore(app);
 export default firestoreDB;