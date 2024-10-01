// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, from } from 'rxjs';
// import { map, switchMap } from 'rxjs/operators';

// // Declare SCOPES for FCM
// const SCOPES = ['https://www.googleapis.com/auth/firebase.messaging'];

// @Injectable({
//   providedIn: 'root'
// })
// export class MessagingService {

//   private apiUrl = 'https://fcm.googleapis.com/v1/projects/fir-notification-76ec4/messages:send';

//   constructor(private http: HttpClient) {}

//   // Function to get the access token
//   getAccessToken(): Observable<string> {
//     return new Observable((observer) => {
//       const key = require('../assets/service-account.json'); // Adjust the path to your service account JSON

//       // Initialize JWT Client using Google's JWT class
//       const jwtClient = new google.auth.JWT(
//         key.client_email,
//         null,
//         key.private_key,
//         SCOPES,
//         null
//       );

//       // Authorize and get the access token
//       jwtClient.authorize((err, tokens) => {
//         if (err) {
//           observer.error(err);
//           return;
//         }
//         observer.next(tokens.access_token);
//         observer.complete();
//       });
//     });
//   }

//   // Function to send notification with the access token
//   sendNotification(payload: any): Observable<any> {
//     return this.getAccessToken().pipe(
//       switchMap((accessToken) => {
//         const headers = new HttpHeaders({
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         });

//         return this.http.post(this.apiUrl, payload, { headers });
//       })
//     );
//   }
// }
