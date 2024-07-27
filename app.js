const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('ee kannalli innu enen nodbeko, alda alda rani, nammavva rani!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
