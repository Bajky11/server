const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.send('Hallo from BajkyServer!');
});

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});
