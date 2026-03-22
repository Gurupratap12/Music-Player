
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBo7m-Haz0GnqfjNBBsaAHVM1QuWnJ1JQQ",
    authDomain: "login-ui-de1b9.firebaseapp.com",
    projectId: "login-ui-de1b9",
    storageBucket: "login-ui-de1b9.firebasestorage.app",
    messagingSenderId: "125345455742",
    appId: "1:125345455742:web:415419a862cd9c15b0022f",
    measurementId: "G-FVJR49YNFM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
export { auth };
export { db };