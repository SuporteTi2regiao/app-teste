const express = require('express');
const app = express();
const PORT = 443;

app.get('/', (req, res) => {
    res.send('Hello from Express on port 8080!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
