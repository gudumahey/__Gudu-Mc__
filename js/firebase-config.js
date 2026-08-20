// ==========================================
// GUDU MC - FIREBASE CONFIG
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

    apiKey: "YOUR_OLD_FIREBASE_API_KEY",

    authDomain: "gudu-mc-c1681.firebaseapp.com",

    projectId: "gudu-mc-c1681",

    storageBucket: "YOUR_OLD_STORAGE_BUCKET",

    messagingSenderId: "YOUR_OLD_SENDER_ID",

    appId: "YOUR_OLD_APP_ID"

};


// ==========================================
// INITIALIZE
// ==========================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// ==========================================
// GOOGLE
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
