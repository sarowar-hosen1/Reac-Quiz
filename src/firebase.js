import { initializeApp } from "firebase/app";

// const app = initializeApp({
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID
// })

const app = initializeApp({
    apiKey: "AIzaSyDzr0Ax-xnCHXMXICWh_Bj_hOBMXf8tkwY",
    authDomain: "quiz-app-23a68.firebaseapp.com",
    projectId: "quiz-app-23a68",
    storageBucket: "quiz-app-23a68.appspot.com",
    messagingSenderId: "1034479197999",
    appId: "1:1034479197999:web:a359c98fe62d8d12478bda",
    measurementId: "G-J45BTKGS45"
})


export default app;