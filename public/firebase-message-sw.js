importScripts ("https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js");
importsScripts ("https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js");

firebase.initializeApp({
    messagingSenderId: 34740812735
});

const initMessaging = firebase.messaging();