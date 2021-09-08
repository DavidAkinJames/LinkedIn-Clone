import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBB1YzFM38y4N5k7KB1_Lj8n-cFUtdn0aQ",
  authDomain: "linkedin-clone-e38ce.firebaseapp.com",
  projectId: "linkedin-clone-e38ce",
  storageBucket: "linkedin-clone-e38ce.appspot.com",
  messagingSenderId: "106816862256",
  appId: "1:106816862256:web:ac43137c9410540b61d5f5"
};

/* firebase initializeApp */
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };