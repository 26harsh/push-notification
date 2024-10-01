import { Component } from '@angular/core';
import { messaging } from './firebase-config';
import { getToken } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon2-notification';

  constructor() {
    // Register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
          this.requestPermission(); // Call requestPermission after registering the service worker
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  

  requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        this.getToken();
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }

  getToken() {
    const vapidKey = "BEuCq2k4brmPa85wfO1agV51iYCJfrzyqX73kvlzihPo7S3fZdZ-VHZF3z3h-FIMDyoTqsRCYV96s7D1Id-W07k"; // Replace with your public VAPID key
    getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
      if (currentToken) {
        console.log('Current token:', currentToken);
        // Send the token to your server and update the UI if necessary
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token.', err);
    });
  }
}
