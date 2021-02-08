
var firebaseConfig = {
    apiKey: "AIzaSyALZxGMD3p8UafxGECvCr6Wo6Zwr4UaqcI",
    authDomain: "kwitterbotletschat.firebaseapp.com",
    projectId: "kwitterbotletschat",
    storageBucket: "kwitterbotletschat.appspot.com",
    messagingSenderId: "731831913688",
    appId: "1:731831913688:web:d8c756725d2ad64115dbad",
    measurementId: "G-CRBCWMDH8W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
