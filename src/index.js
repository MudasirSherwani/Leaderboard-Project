import './style.css';
import showScoreList from './module/displayListData.js';
import postData from './module/postData.js';

const playerName = document.getElementById('player-name');
const playerScore = document.getElementById('scores');
const submitBtn = document.getElementById('submit');
const reloadBtn = document.getElementById('btn-refresh');
const statusText = document.getElementById('status');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!(playerName.value === '' && playerScore.value === '')) {
    const printMesg = async () => {
      const mesg = await postData(playerName.value, playerScore.value, showScoreList);
      document.getElementById('status').innerHTML = mesg;
    };
    printMesg();
  }
  playerName.value = playerScore.value = '';
});
reloadBtn.addEventListener('click', (e) => {
  showScoreList();
});
window.addEventListener('load', () => {
  showScoreList();  
}, false);