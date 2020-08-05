import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyATdEDiTLiXoQ89qYz3LhneX2Ux4fvbqnM",
    authDomain: "crwn-db-1da8e.firebaseapp.com",
    databaseURL: "https://crwn-db-1da8e.firebaseio.com",
    projectId: "crwn-db-1da8e",
    storageBucket: "crwn-db-1da8e.appspot.com",
    messagingSenderId: "1074764271530",
    appId: "1:1074764271530:web:682bd902e35adb3ea6a5d3",
    measurementId: "G-GCS7T5BHWK"

};

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

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
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;