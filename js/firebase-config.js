// ==========================================
// GUDU MC FIREBASE CONFIG
// ==========================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    query,
    where,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// ==========================================
// FIREBASE CONFIG
// ==========================================

const firebaseConfig = {

    apiKey: "AIzaSyAJtiPsf1vx_KmznFFEhiHbtQGmdIxGv9k",

    authDomain: "gudu-mc-c1681.firebaseapp.com",

    projectId: "gudu-mc-c1681",

    storageBucket: "gudu-mc-c1681.firebasestorage.app",

    messagingSenderId: "886551667549",

    appId: "1:886551667549:web:4b32d0aeb7acb2c100feb4"
};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app = initializeApp(firebaseConfig);


// ==========================================
// FIREBASE SERVICES
// ==========================================

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// ==========================================
// GOOGLE PROVIDER
// ==========================================

const googleProvider = new GoogleAuthProvider();


// ==========================================
// EXPORT
// ==========================================

export {

    app,

    auth,

    db,

    storage,

    googleProvider,

    signInWithPopup,

    signInWithEmailAndPassword,

    createUserWithEmailAndPassword,

    signOut,

    onAuthStateChanged,

    collection,

    addDoc,

    getDocs,

    doc,

    getDoc,

    setDoc,

    updateDoc,

    query,

    where,

    orderBy,

    serverTimestamp,

    ref,

    uploadBytes,

    getDownloadURL

};
