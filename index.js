const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello from Express on port 3001!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
