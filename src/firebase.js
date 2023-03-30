import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDZecY_HhPJCSW3UwmTK_bSbMvTFBSgugk",
    authDomain: "react-linkedin-clone-b6223.firebaseapp.com",
    projectId: "react-linkedin-clone-b6223",
    storageBucket: "react-linkedin-clone-b6223.appspot.com",
    messagingSenderId: "239196544362",
    appId: "1:239196544362:web:400cd70b450cf3ac7f1913",
    measurementId: "G-GCL1VY4ZJF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;