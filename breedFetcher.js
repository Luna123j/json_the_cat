const request = require('request');
const name = process.argv.slice(2);
request("https://api.thecatapi.com/v1/breeds", (error, response, body) => {
  const data = JSON.parse(body);
  let description = "";
  for (const breed of data) {
    if (breed.name === name[0]) {
      description = breed.description;
      console.log(description);
    }
  }
  if (!description) console.log("breed not found");
  if (error) console.log(error);
});


