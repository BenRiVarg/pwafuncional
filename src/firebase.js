// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken} from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJhSZLXQ7ORLVcoDZj-wVfHV8TAxG_jug",
  authDomain: "almacen-go.firebaseapp.com",
  projectId: "almacen-go",
  storageBucket: "almacen-go.appspot.com",
  messagingSenderId: "34740812735",
  appId: "1:34740812735:web:815945733eb0a7ee86bf0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
//messaging.getToken({vapidKey: "BMuXQKAckRb06aHNMyxPGRvoM8UCeixhBKaz33J_JVta-ixlx_HDUEKEduDHMmOFUn1H3j06WobcUL4aMtPRZ5o"});


getToken(messaging, { vapidKey: 'BMuXQKAckRb06aHNMyxPGRvoM8UCeixhBKaz33J_JVta-ixlx_HDUEKEduDHMmOFUn1H3j06WobcUL4aMtPRZ5o' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

export default app ;