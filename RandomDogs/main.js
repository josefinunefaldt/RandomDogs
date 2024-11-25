import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.getElementById("getDogs").addEventListener("click", getdogs);


function getdogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json()) 
    .then((data) => {
      console.dir(data); 
      const dogImageUrl = data.message;
      const imgElement = document.getElementById("dogImage");
      imgElement.src = dogImageUrl; 
      imgElement.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching the dog image:", error);
    });
}



