import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {

    apiKey: "AIzaSyA9GCAmfofP7Yg8Yfq5WgvnPzpZ_Yd4Vf8",

    authDomain: "gudu-mc.firebaseapp.com",

    projectId: "gudu-mc",

    storageBucket: "gudu-mc.firebasestorage.app",

    messagingSenderId: "284955450310",

    appId: "1:284955450310:web:7c74a1de4a2475707570c7",

    measurementId: "G-RP47XF158M"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export {
    auth,
    googleProvider,
    signInWithPopup
};
