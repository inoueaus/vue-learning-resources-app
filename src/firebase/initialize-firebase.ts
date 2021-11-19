import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDV0sCx3ZeF2t_gHiax-kSg6ml-1J1JDIs",
  authDomain: "vue-learning-resources-app.firebaseapp.com",
  databaseURL:
    "https://vue-learning-resources-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-learning-resources-app",
  storageBucket: "vue-learning-resources-app.appspot.com",
  messagingSenderId: "425825885698",
  appId: "1:425825885698:web:8129eee9086ab36a19911b",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
