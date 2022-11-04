import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyAa93yWosaVQ6ZRSarSTiFVG31g9X4lT4E",
    authDomain: "foodapp-68269.firebaseapp.com",
    projectId: "foodapp-68269",
    storageBucket: "foodapp-68269.appspot.com",
    messagingSenderId: "153407948548",
    appId: "1:153407948548:web:b22c7a2bcce7931cf63251",
    measurementId: "G-KK2J8T5R2J"
  };

  const app = initializeApp(firebaseConfig)

  const auth = getAuth();
  
  export { app, auth };
  
    