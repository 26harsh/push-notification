
// importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// importScripts('/assets/js/firebase/firebase-app.js');
// importScripts('./assets/js/firebase/firebase-messaging.js');

importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');


// firebase.initializeApp({
//     apiKey: "AIzaSyA_ZC4wggnOSOGNqoXdIlh6bSXBli62aao",
//     authDomain: "fir-notification-76ec4.firebaseapp.com",
//     projectId: "fir-notification-76ec4",
//     storageBucket: "fir-notification-76ec4.appspot.com",
//     messagingSenderId: "612089097375",
//     appId: "1:612089097375:web:7e75841c8c2f0b792c86aa"
// });

firebase.initializeApp({
    apiKey: "AIzaSyB1deumgnXCFBoFHzcAyuRtNf47ohCfTkw",
    authDomain: "notification-3-13bf4.firebaseapp.com",
    projectId: "notification-3-13bf4",
    storageBucket: "notification-3-13bf4.appspot.com",
    messagingSenderId: "465004526948",
    appId: "1:465004526948:web:31e23144afdd0792794e71"
});



// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);  
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: "payload.notification.body",
      icon: '/firebase-logo.png' // Custom icon (optional)
    };
  
    return self.registration.showNotification(notificationTitle, notificationOptions);
  });