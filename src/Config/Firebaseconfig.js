// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC5Qs8iylxHIcP10dB8Y055dCDzZV8C8w",
  authDomain: "my-resume-6f465.firebaseapp.com",
  projectId: "my-resume-6f465",
  storageBucket: "my-resume-6f465.appspot.com",
  messagingSenderId: "615101407448",
  appId: "1:615101407448:web:3c263030abf6f78a0337ad",
  measurementId: "G-GTJCE6EMTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app