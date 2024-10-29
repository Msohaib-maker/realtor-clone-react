// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"; // Import Auth SDK
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "realtor-clone-react.firebaseapp.com",
  projectId: "realtor-clone-react",
  storageBucket: "realtor-clone-react.appspot.com",
  messagingSenderId: "274012290784",
  appId: "1:274012290784:web:6613bae03bba4331989a85"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCTFdsNOf74GwPSYQTDPcaWshSkVVtp9h8",
//   authDomain: "atyourdoorstep-a5c85.firebaseapp.com",
//   databaseURL: "https://atyourdoorstep-a5c85-default-rtdb.firebaseio.com",
//   projectId: "atyourdoorstep-a5c85",
//   storageBucket: "atyourdoorstep-a5c85.appspot.com",
//   messagingSenderId: "30450144760",
//   appId: "1:30450144760:web:066963a22f44d22289320d",
//   measurementId: "G-T1GNYCQN4R"
// };

// Initialize Firebase and Firestore with error handling
let db, auth;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully");

  // Initialize Auth
  auth = getAuth(app);
  console.log("Auth initialized successfully");

} catch (error) {
  console.error("Firebase initialization error:", error);
  alert("There was an issue connecting to the database. Please try again later.");
}

// Export Firestore instance, which might be undefined if initialization failed
export { db, auth };
