import getData from './getData.js';

const ScoreList = document.getElementById('score-list-id');
// Score List Element Creation here
const ShowScoreList = (elements) => {
  const div = `<div><div class="list-section">
                    <div class="list-elements">
                        <h4 class="list-name">${elements.user} : ${elements.score}</h4>
                    </div>
                </div></div><hr></div>`;
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