
const ScoreList = document.getElementById('score-list-id');
// Score List Element Creation here
const ShowScoreList = (elements) => {
  const div = `<div><div class="list-section">
                    <div class="list-elements">
                        <h4 class="list-name">${elements.Name} : ${elements.Score}</h4>
                    </div>
                </div></div><hr></div>`;
  const ListElements = ScoreList.innerHTML + div;
  ScoreList.innerHTML = ListElements;
};

module.exports =  ShowScoreList;