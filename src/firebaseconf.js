import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCqmq-w9-ikViyxp2fYPxFPOCHveGo0ipM",
    authDomain: "pwa-poc-92538.firebaseapp.com",
    databaseURL: "https://pwa-poc-92538.firebaseio.com",
    projectId: "pwa-poc-92538",
    storageBucket: "pwa-poc-92538.appspot.com",
    messagingSenderId: "888930700368"
};
firebase.initializeApp(config);

export var storage = firebase.storage();


