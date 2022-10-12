import './style.css';
import showScoreList from './module/displayListData.js';

const scoreBoardList = [
  {Name: 'Muhammad', Score: 32},
  {Name: 'Sherwani', Score: 42},
  {Name: 'Adnan', Score: 52},
  {Name: 'Usama', Score: 22},
  {Name: 'Mudasir', Score: 55},
  {Name: 'Ali', Score: 66},
  {Name: 'Usman', Score: 33},
  {Name: 'Umar', Score: 77}
];

// Display DOM Element Data here
function ShowScoreListFunction() {
  scoreBoardList.forEach((item) => {
    showScoreList(item);
  });
}
ShowScoreListFunction();