import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCPEv4UDOH9o7P7wy9fWFs_aFnCdV-UR4E",
  authDomain: "netninjamarioplan.firebaseapp.com",
  databaseURL: "https://netninjamarioplan.firebaseio.com",
  projectId: "netninjamarioplan",
  storageBucket: "netninjamarioplan.appspot.com",
  messagingSenderId: "962835604866"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
