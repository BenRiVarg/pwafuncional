importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAJhSZLXQ7ORLVcoDZj-wVfHV8TAxG_jug",
  authDomain: "almacen-go.firebaseapp.com",
  projectId: "almacen-go",
  storageBucket: "almacen-go.appspot.com",
  messagingSenderId: "34740812735",
  appId: "1:34740812735:web:815945733eb0a7ee86bf0a"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});