
// // importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
// // importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// // importScripts('/assets/js/firebase/firebase-app.js');
// // importScripts('./assets/js/firebase/firebase-messaging.js');

// importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');


// // firebase.initializeApp({
// //     apiKey: "AIzaSyA_ZC4wggnOSOGNqoXdIlh6bSXBli62aao",
// //     authDomain: "fir-notification-76ec4.firebaseapp.com",
// //     projectId: "fir-notification-76ec4",
// //     storageBucket: "fir-notification-76ec4.appspot.com",
// //     messagingSenderId: "612089097375",
// //     appId: "1:612089097375:web:7e75841c8c2f0b792c86aa"
// // });

// firebase.initializeApp({
//     apiKey: "AIzaSyB1deumgnXCFBoFHzcAyuRtNf47ohCfTkw",
//     authDomain: "notification-3-13bf4.firebaseapp.com",
//     projectId: "notification-3-13bf4",
//     storageBucket: "notification-3-13bf4.appspot.com",
//     messagingSenderId: "465004526948",
//     appId: "1:465004526948:web:31e23144afdd0792794e71"
// });



// // Retrieve an instance of Firebase Messaging so that it can handle background messages.
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log('Received background message: ', payload);  
//   });

//   self.addEventListener('notificationclick', function(event) {
//     console.log('Notification clicked:', event);
//   });

self.addEventListener('push', function(event) {
  let data = event.data.json();  // Extract the notification data

  const link = data.notification.click_action

  const notificationOptions = {
    body: data.notification.body,
    icon: '/firebase-logo.png',  // Add your custom icon here
    data: {
      url: link  // Set the link from fcm_options or a default
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.notification.title, notificationOptions)
  );
});

// Handle notification click event to open the link
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  // Focus the page if already open, otherwise open in a new tab
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      // Open in a new tab if not already open
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
});