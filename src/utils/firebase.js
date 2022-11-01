import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCie8mdYb3j9ti-q7GIMAkZIdvAXy8kTZI",
  authDomain: "clone-ce24d.firebaseapp.com",
  projectId: "clone-ce24d",
  storageBucket: "clone-ce24d.appspot.com",
  messagingSenderId: "938138909234",
  appId: "1:938138909234:web:76b4aac19e0b0781da9a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;