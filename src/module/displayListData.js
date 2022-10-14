import getData from './getData.js';

const ScoreList = document.getElementById('score-list-id');
// Score List Element Creation here
const ShowScoreList = (elements) => {
  const div = `<div class="list-section">
                        <h4 class="list-name">${elements.user} <span> &nbsp : &nbsp&nbsp&nbsp&nbsp&nbsp</span><span> ${elements.score} </span></h4>
                </div></div><hr>`;
  const ListElements = ScoreList.innerHTML + div;
  ScoreList.innerHTML = ListElements;
};

const DisplayData = async () => {
  const data = await getData();
  ScoreList.textContent = '';
  data.forEach((item) => {
    ShowScoreList(item);
  });
};

export default DisplayData;