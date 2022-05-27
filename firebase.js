/**
 * @file firebase.js
 * @author Logan Bahr
 * @description Firebase configuration for Next.js
 * @since 5/22/22
 */
import {initializeApp, getApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeVA0iJFzfn6R_enoXJAVn2TsKMznzUfw",
    authDomain: "waivez.firebaseapp.com",
    projectId: "waivez",
    storageBucket: "waivez.appspot.com",
    messagingSenderId: "35055601647",
    appId: "1:35055601647:web:4fa35c099165f01c93181a",
    measurementId: "G-PK616KBE9S"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);

export {app, db, storage, auth};
