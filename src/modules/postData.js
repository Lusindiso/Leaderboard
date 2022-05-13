const postData = (_name, _score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/33eQSLsXyeWdO7B0sgm8/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: _name,
      score: _score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default postData;