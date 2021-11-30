const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('Fund Manager'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/Fund Manager/index.html'));
});

app.listen(4200, () => {
	console.log('Application started and Listening on port 4200');
});
