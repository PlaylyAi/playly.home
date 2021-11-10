import arrow from './assets/images/arrow.svg';
import machinae from './assets/images/machinae-albae.svg';
// import video from './assets/videos/football.mp4';
import playly1 from './assets/videos/playly1.mp4';
import playly2 from './assets/videos/playly2.mp4';
import playly3 from './assets/videos/playly3.mp4';
import playly4 from './assets/videos/playly4.mp4';
import playly5 from './assets/videos/playly5.mp4';

const videoAi = document.getElementById('videoAi');
const videoAnalysis = document.getElementById('videoVideoAnalysis');
const videoRecognition = document.getElementById('videoRecognition');
const videoModeling = document.getElementById('videoModeling');
const videoPlyerAnalysis = document.getElementById('videoPlyerAnalysis');

videoAi.innerHTML = `<source src="${playly1}" type="video/mp4"></source>`;
videoAnalysis.innerHTML = `<source src="${playly2}" type="video/mp4"></source>`;
videoRecognition.innerHTML = `<source src="${playly3}" type="video/mp4"></source>`;
videoModeling.innerHTML = `<source src="${playly4}" type="video/mp4"></source>`;
videoPlyerAnalysis.innerHTML = `<source src="${playly5}" type="video/mp4"></source>`;

document.querySelector('.machinae__logo').innerHTML = ` <img src="${machinae}" alt="Machinae Albae">`;

document.querySelector('.arrow').innerHTML = `<div class="scroll" id="scroll">scroll</div> <img src="${arrow}" id="arrowImg" alt="scroll arrow">`;
