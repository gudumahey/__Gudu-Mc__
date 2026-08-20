// ==========================================
// GUDU MC STAFF - FIREBASE CONFIG
// ==========================================

// Firebase App
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Authentication
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Firestore
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

// Firebase Storage
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

    apiKey: "AIzaSyBIseL_AlvinVMSZGlChbkqzZzm28OChis",

    authDomain: "gudu-mc-staff.firebaseapp.com",

    projectId: "gudu-mc-staff",

    storageBucket: "gudu-mc-staff.firebasestorage.app",

    messagingSenderId: "855553553216",

    appId: "1:855553553216:web:2a4bb778de73da64a480a5",

    measurementId: "G-QP7VGMLF8R"
};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app = initializeApp(firebaseConfig);


// ==========================================
// SERVICES
// ==========================================

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// ==========================================
// GOOGLE LOGIN
// ==========================================

const googleProvider = new GoogleAuthProvider();


// ==========================================
// EXPORT EVERYTHING
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
