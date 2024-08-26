import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNuZ9emxOAoS0QYUKnbpJIHTuOxRRpAK0",
  authDomain: "cloud-image-361ff.firebaseapp.com",
  projectId: "cloud-image-361ff",
  storageBucket: "cloud-image-361ff.appspot.com",
  messagingSenderId: "50331406427",
  appId: "1:50331406427:web:a49cb68e3b813f04df2f7e",
  measurementId: "G-Z38539FJ3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export const accessGoogle = async()=>{
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    const user = GoogleAuthProvider.credentialFromResult(response);
    console.log(user);
}

