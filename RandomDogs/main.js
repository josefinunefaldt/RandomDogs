import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('getDogs');
  const image = document.getElementById('dogImage');
  const closeButton = document.getElementById('closeButton');

  function fetchRandomDog() {
      fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
              image.src = data.message;
              image.style.display = 'block';
              closeButton.style.display = 'block';
          })
          .catch(error => console.error('Error fetching random dog:', error));
  }

  button.addEventListener('click', function() {
      fetchRandomDog();
      button.style.display = 'none';
  });

  image.addEventListener('click', function() {
      fetchRandomDog();
  });

  closeButton.addEventListener('click', function() {
      image.style.display = 'none';
      closeButton.style.display = 'none';
      button.style.display = 'block';
  });
});



