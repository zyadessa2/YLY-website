import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiagVN65mZHedpcOO6509GykMOH0V48OE",
    authDomain: "yly-app.firebaseapp.com",
    projectId: "yly-app",
    storageBucket: "yly-app.appspot.com",
    messagingSenderId: "74887065120",
    appId: "1:74887065120:web:d465ffd534d570ada25645"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()
