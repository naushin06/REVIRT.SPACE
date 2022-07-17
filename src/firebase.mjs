
//   // Import the functions you need from the SDKs you need
// // import firebase from'firebase/compat/app';
// // import "firebase/firestore";
// // import 'firebase/compat/auth'
// import firebase from "firebase/compat/app";
// import "firebase/firestore";
// import { Firestore } from "firebase/firestore";
// // import firebase from 'firebase/app';
// // import 'firebase/firestore';
  // import { initializeApp } from "firebase/app";

//   import { collection, query, where, getDocs } from "firebase/firestore";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDbK_NKTSjV75hdbp03GjP4x2hsyzr_hGw",
//     authDomain: "tdlprojec.firebaseapp.com",
//     projectId: "tdlprojec",
//     storageBucket: "tdlprojec.appspot.com",
//     messagingSenderId: "145733847387",
//     appId: "1:145733847387:web:3edf33668cc16d28a0b27e",
//     measurementId: "G-JMYG3LJNNW"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// const db=app.Firestore();
// console.log(db);


 

//   // const q = query(collection(db, "cities"), where("capital", "==", true));
  
//   // const querySnapshot = await getDocs(q);
//   // querySnapshot.forEach((doc) => {
//   //   // doc.data() is never undefined for query doc snapshots
//   //   console.log(doc.id, " => ", doc.data());
//   // });





// import firebase from'firebase/compat/app';
// import "firebase/firestore";



// const firebaseConfig = {
//   apiKey: "AIzaSyDbK_NKTSjV75hdbp03GjP4x2hsyzr_hGw",
//   authDomain: "tdlprojec.firebaseapp.com",
//   projectId: "tdlprojec",
//   storageBucket: "tdlprojec.appspot.com",
//   messagingSenderId: "145733847387",
//   appId: "1:145733847387:web:3edf33668cc16d28a0b27e",
//   measurementId: "G-JMYG3LJNNW"
// };

// firebase.initializeApp(firebaseConfig);



import { initializeApp } from "firebase/app";
import {getDatabase} from"firebase/database"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from 'firebase/app';
import 'firebase/firestore';
// import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDbK_NKTSjV75hdbp03GjP4x2hsyzr_hGw",
  authDomain: "tdlprojec.firebaseapp.com",
  projectId: "tdlprojec",
  storageBucket: "tdlprojec.appspot.com",
  messagingSenderId: "145733847387",
  appId: "1:145733847387:web:3edf33668cc16d28a0b27e",
  measurementId: "G-JMYG3LJNNW"
};
//   const app = initializeApp(firebaseConfig);
// export const db=getDatabase(app);
// console.log(db);

  firebase.initializeApp(firebaseConfig);

  export const db= firebase.firestore();

  console.log(db);
 