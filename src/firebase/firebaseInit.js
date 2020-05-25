import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
