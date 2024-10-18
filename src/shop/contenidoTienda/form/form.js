import { writable } from "svelte/store";
import { URL } from "../../../components/tools/connections/url";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Store para gestionar el usuario de Google
let user = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{};
export const userGoogle = writable(user);



// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNuZ9emxOAoS0QYUKnbpJIHTuOxRRpAK0",
  authDomain: "cloud-image-361ff.firebaseapp.com",
  projectId: "cloud-image-361ff",
  storageBucket: "cloud-image-361ff.appspot.com",
  messagingSenderId: "50331406427",
  appId: "1:50331406427:web:a49cb68e3b813f04df2f7e",
  measurementId: "G-Z38539FJ3T"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para crear un nuevo usuario
export const crearUsuario = async (e) => { 
  try {
    const response = await fetch(`${URL}/admin/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: e.target.email.value.trim(),
        password: e.target.password.value.trim()
      })
    });

    if (!response.ok) {
      throw new Error('Error al crear el usuario');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error en la creación de usuario:', error);
  }
};

// Función para manejar el login
export const login = async (token) => {
  try {
    const response = await fetch(`${URL}/customer/token`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error en la verificación del token');
    }

    const json = await response.json();
    
    localStorage.setItem("user", JSON.stringify(json));
    userGoogle.set(json);
    return json;
  } catch (error) {
    console.error('Error en el login:', error);
  }
};

// Función para iniciar sesión con email y contraseña
export const IniciaSesion = async (e) => {
  try {
    const response = await signInWithEmailAndPassword(auth, e.target.email.value.trim(), e.target.password.value.trim());

    const getIdToken = await response.user.getIdToken();

    const resLogin = await login(getIdToken);


    return resLogin;
  } catch (error) {
    console.error('Error en la autenticación con email y contraseña:', error);
  }
};

// Función para iniciar sesión con Google
export const accesGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    const resLogin = await login(response.user.accessToken);
    
    return resLogin;
  } catch (error) {
    console.error('Error en la autenticación con Google:', error);
  }
};
