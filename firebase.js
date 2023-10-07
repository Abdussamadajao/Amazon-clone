import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB_yw2KdgnCoz_PdLoCzqe7SJSO-EeZmfI",
  authDomain: "clone-6128a.firebaseapp.com",
  projectId: "clone-6128a",
  storageBucket: "clone-6128a.appspot.com",
  messagingSenderId: "1054795348855",
  appId: "1:1054795348855:web:5238c8c4b231485f26bf72"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();


const db = app.firestore()
const auth = app.auth()


export { db, auth };
