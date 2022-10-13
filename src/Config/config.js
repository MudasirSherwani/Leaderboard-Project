const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const postData = async() => {
  const body = JSON.stringify({ name: 'Chess By Mudasir' });
  const response = await fetch(url, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data.result;
};

module.exports = postData();