var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyDMQ8PvcMEPFLFQdZKxn8WMfQNnIBbUbAA",
    authDomain: "yogaai-f90c8.firebaseapp.com",
    databaseURL: "https://yogaspire-60fc9.firebaseio.com",
    projectId: "yogaai-f90c8",
    storageBucket: "yogaai-f90c8.appspot.com",
    messagingSenderId: "736351867264"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}



