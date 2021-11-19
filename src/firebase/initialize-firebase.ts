import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2N_OZxB35l5yQFThuYTno4OgOBJQWZRw",
  authDomain: "react-studies-742e1.firebaseapp.com",
  databaseURL: "https://react-studies-742e1-default-rtdb.firebaseio.com",
  projectId: "react-studies-742e1",
  storageBucket: "react-studies-742e1.appspot.com",
  messagingSenderId: "375802689568",
  appId: "1:375802689568:web:ee6f434de69b526b516445"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;