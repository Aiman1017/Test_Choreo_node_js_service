const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test Case for Connectivity during DEV
app.get('/', (req, res) => {
    res.status(200).send('Successfully connect to Server !!!')
});

const port = process.env.REACT_API_PORT || 3001;

app.listen(port, () => console.log(`Listening on ${port}...`));