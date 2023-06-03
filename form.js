const firebaseConfig = {
    apiKey: "AIzaSyCsKAvIVI25c7xXlm0KKkk_FHKQYtkSRoo",
    authDomain: "attendance-bd290.firebaseapp.com",
    databaseURL: "https://attendance-bd290-default-rtdb.firebaseio.com",
    projectId: "attendance-bd290",
    storageBucket: "attendance-bd290.appspot.com",
    messagingSenderId: "874483996847",
    appId: "1:874483996847:web:1e4e3fedc5a93b16325c5a",
    measurementId: "G-DH55KG5DZ4"
  };
  firebase.initializeApp(firebaseConfig);

// reference your database

const id = document.getElementById("qr-text");


const addbtn =document.getElementById("submit");

const database = firebase.database();
addbtn.addEventListener('click', (e) => {
  e.preventDefault();
  database.ref('/users/' + id.value).set({
    id:qr-text
  });
});