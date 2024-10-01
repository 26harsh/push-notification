// src/app/firebase-config.ts
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB1deumgnXCFBoFHzcAyuRtNf47ohCfTkw",
//     authDomain: "notification-3-13bf4.firebaseapp.com",
//     projectId: "notification-3-13bf4",
//     storageBucket: "notification-3-13bf4.appspot.com",
//     messagingSenderId: "465004526948",
//     appId: "1:465004526948:web:31e23144afdd0792794e71"
// };

const firebaseConfig = {
    apiKey: "AIzaSyB1deumgnXCFBoFHzcAyuRtNf47ohCfTkw",
    authDomain: "notification-3-13bf4.firebaseapp.com",
    projectId: "notification-3-13bf4",
    storageBucket: "notification-3-13bf4.appspot.com",
    messagingSenderId: "465004526948",
    appId: "1:465004526948:web:31e23144afdd0792794e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

export { messaging };
