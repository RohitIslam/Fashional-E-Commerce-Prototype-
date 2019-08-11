import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0yu_vmxbWyPwHBJNJqEPSpUInZaFvUkw",
  authDomain: "dummy-ecommerce.firebaseapp.com",
  databaseURL: "https://dummy-ecommerce.firebaseio.com",
  projectId: "dummy-ecommerce",
  storageBucket: "",
  messagingSenderId: "415483600174",
  appId: "1:415483600174:web:914aef50b55ebaed"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc("users/" + userAuth.uid);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating users: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
