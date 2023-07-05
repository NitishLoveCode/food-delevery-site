import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDW63nnKEQdYbUcejHmwrIVzZm3QlxTSEk",
  authDomain: "fooddelivery-d6cf1.firebaseapp.com",
  projectId: "fooddelivery-d6cf1",
  storageBucket: "fooddelivery-d6cf1.appspot.com",
  messagingSenderId: "475441426777",
  appId: "1:475441426777:web:bb0bada48ae580d7085c48",
  measurementId: "G-XX02HRW183"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
