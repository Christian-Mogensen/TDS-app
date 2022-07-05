import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  apiKey: "AIzaSyBZ4FP9TECl_m5d9Kruq8xPu9fouttfztw",
  // authDomain: process.env.AUTH_DOMAIN,
  authDomain: "fir-tutorial-f6ddf.firebaseapp.com",
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default getFirestore(app);
