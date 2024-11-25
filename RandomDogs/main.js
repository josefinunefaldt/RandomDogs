import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.getElementById("getDogs").addEventListener("click", getdogs);


function getdogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json()) 
  .then((json) => console.dir(json));
  
}

