import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { db } from "./firebase.js";
import { collection, getDocs 
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
const songList = document.querySelector("#songList");
const player = document.querySelector("#player");

window.signup = function () {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth, email, password).then(() => {
        // alert("Signup successful");
          window.location.href = "songList.html";
    })
    .catch((error) => {
        alert(error.message);
    });
};
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // alert("Login successful");
      window.location.href = "songList.html";
    })
    .catch((error) => {
        console.log(error);
      alert(error.message);
    });
};
let current = null;
async function loadSongs(){
  const querySnapshot = await getDocs(collection(db, "songs"));

  querySnapshot.forEach((doc) => {
    const song = doc.data();

    const li = document.createElement("li");
    li.textContent = song.name;

    li.onclick = () => {
      console.log(song.url); // 👈 check URL
  player.src = song.url;

  player.play().catch(err => {
    console.log("Play error:", err);
  });
      // player.src = song.url;
      // player.play();

      // if(current) 
      // current.classList.remove("active");
      // li.classList.add("active");
      // current = li;
    };
    songList.appendChild(li);
  });
}

loadSongs();