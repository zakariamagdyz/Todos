import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJkaHVzhGvM8wcf_Er94qEeq8-WmhN5LQ",
  authDomain: "change-your-life-32120.firebaseapp.com",
  databaseURL: "https://change-your-life-32120.firebaseio.com",
  projectId: "change-your-life-32120",
  storageBucket: "change-your-life-32120.appspot.com",
  messagingSenderId: "422198185661",
  appId: "1:422198185661:web:d654f20926d7e08cf131d4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  try {
    auth.signInWithPopup(Provider);
  } catch (e) {
    console.log(e.message);
  }
};

export const createUserProfile = async (userAuth, addionalData) => {
  if (!userAuth) return;
  const userRef = fireStore.doc(`/users/${userAuth.uid}`);
  const userSnap = await userRef.get();
  if (!userSnap.exists) {
    const { displayName, email, uid } = userAuth;
    userRef.set({
      id: uid,
      displayName,
      email,
      ...addionalData,
    });
  }

  return userRef;
};

// createUserProfile({
//   uid: 22222,
//   displayName: "zakaria",
//   email: "zakariamagdy@ymail.com",
// });

export const addData = async (id, Todo) => {
  const userRef = await fireStore.doc(`/users/${id}`);

  userRef.update("todos", Todo);
};
