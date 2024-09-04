import { initializeApp } from "firebase/app";
import {URL} from "../../../components/tools/connections/url";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

//Credenciales
const firebaseConfig = {
    apiKey: "AIzaSyDNuZ9emxOAoS0QYUKnbpJIHTuOxRRpAK0",
    authDomain: "cloud-image-361ff.firebaseapp.com",
    projectId: "cloud-image-361ff",
    storageBucket: "cloud-image-361ff.appspot.com",
    messagingSenderId: "50331406427",
    appId: "1:50331406427:web:a49cb68e3b813f04df2f7e",
    measurementId: "G-Z38539FJ3T",
};

//Iniciar firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);




//Evento que captura el archvio en file
export function changeImputImage(event) {
    return event.target.files[0];
    
}

//Evento para enviar la imagen al firebase
export const handleImageUpload = async (file, fileName, isValidType) => {
    const storageRef = ref(storage, "images/" + fileName);
    isValidType = ['image/jpeg', 'image/png', 'image/gif','image/webp'].includes(file.type)
    try {
        if(isValidType){

            await uploadBytes(storageRef, file);
            console.log("File uploaded successfully!");
    
            let url = await getDownloadURL(storageRef);
            let jsonImage = {
                name: fileName,
                value: url,
            };
            let fetchImage = await fetch(`${URL}/images`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jsonImage),
            });
            return await fetchImage.json();
        }else{
            return {
                entity:{name:"formato Invalido"},
                message: "El archivo importado no es una imagen.",
                error: true
            }
        }
    } catch (error) {
        console.error("Error uploading file:", error);
    }
};