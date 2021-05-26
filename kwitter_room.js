// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBNZXJ4OBy8OTVufgkIdqCPqV9VQTg7q0M",
  authDomain: "kwitter-96336.firebaseapp.com",
  databaseURL: "https://kwitter-96336-default-rtdb.firebaseio.com",
  projectId: "kwitter-96336",
  storageBucket: "kwitter-96336.appspot.com",
  messagingSenderId: "833199259273",
  appId: "1:833199259273:web:786fa8ec171a34d667d058",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
getData();
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem(user_name);
  localStorage.removeItem(room_name);
  window.location = "index.html";
}
