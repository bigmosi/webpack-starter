import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughing from './assets/laughing.jpeg';

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

const jokBtn = document.getElementById('jokeBtn');

jokBtn.addEventListener('click',generateJoke);

generateJoke();