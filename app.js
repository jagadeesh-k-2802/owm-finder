const fs = require('fs');
const express = require('express');
const querystring = require('querystring');

const app = express();

let data;
const PORT = process.env.PORT || 2819;
const NO_OF_RESULTS = 30;

// Load JSON File Into Memory
fs.readFile('./city.list.min.json', 'utf8', (err, jsonData) => {
  if (err) {
    throw err;
  }

  try {
    data = JSON.parse(jsonData);
  } catch (err) {
    console.error(err);
  }
});

app.get('/', (req, res) => {
  const query = Object.keys(querystring.decode(req.query.query))[0];

  const output = {};

  for (const city of data) {
    // Limit The Results
    if (Object.values(output).length > NO_OF_RESULTS) {
      break;
    }

    const match = city.name.match(new RegExp(`${query}`, 'gi'));

    // Don't Add If It Is Already There
    if (match && !output[city.name]) {
      output[city.name] = { id: city.id, name: city.name };
    }
  }

  // Send The Array Values
  res.json(Object.values(output));
});

app.listen(PORT, () => {
  console.log(`Server Listening 👂 On Port ${PORT}`);
});
