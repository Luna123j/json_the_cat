const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let err = null;
  let description = "";
  request("https://api.thecatapi.com/v1/breeds", (error, response, body) => {
    const data = JSON.parse(body);
    for (const breed of data) {
      if (breed.name === breedName) {
        description = breed.description;
      }
    }
    if (!description) description = "breed not found";
    if (error) err = error;
    callback(err, description);
  });

};

module.exports = { fetchBreedDescription };


