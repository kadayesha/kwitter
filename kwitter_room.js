
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyABkkkVoIgE8yR-jRZkqJR1Es1mgL-xHTE",
      authDomain: "kwitter-ea6f0.firebaseapp.com",
      databaseURL: "https://kwitter-ea6f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea6f0",
      storageBucket: "kwitter-ea6f0.appspot.com",
      messagingSenderId: "1078719887999",
      appId: "1:1078719887999:web:d9a0f4eb091fa1ad435d4a"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
     window.location = "index.html";
}