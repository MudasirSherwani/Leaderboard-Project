import displData from './displayListData.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B8bHN0JbkSy1Vn1HtMRJ/scores/';
const postData = async (playerName, scores, displData) => {
  const body = JSON.stringify({ user: playerName, score: scores });
  const response = await fetch(url, {method: 'POST', body, headers: {'Content-type': 'application/json; charset=UTF-8'}});
  const data = await response.json();
  const returnResponse = data.result;
  displData();
  return returnResponse;
};

export default postData;