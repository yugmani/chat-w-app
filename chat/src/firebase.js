import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxh2LnO2_2r-fJU2qR3ctFTMFdWaiVM2A",
  authDomain: "chat-w-app.firebaseapp.com",
  projectId: "chat-w-app",
  storageBucket: "chat-w-app.appspot.com",
  messagingSenderId: "688474807925",
  appId: "1:688474807925:web:9c75bcae08d046bbce223c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
