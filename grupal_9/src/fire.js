import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCRmpY6YXe89vzsMr4Un46QzSX-GNYef9M",
authDomain: "auth-codigo.firebaseapp.com",
projectId: "auth-codigo",
storageBucket: "auth-codigo.appspot.com",
messagingSenderId: "114305681196",
appId: "1:114305681196:web:256ad54b86ca4d55ea8e89"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
