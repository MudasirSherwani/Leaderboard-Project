const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B8bHN0JbkSy1Vn1HtMRJ/scores/');
  const resultData = await response.json();
  return resultData.result;
};

export default getData;