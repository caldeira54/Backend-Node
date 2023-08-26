const express = require('express');
const cors = require('cors');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes');

server.use(cors());
server.use(express.json());

server.use('/task', TaskRoutes);

server.get('/teste', (req, res) => {
    res.send('TUDO CERTO COM A API!');
});

server.listen(3333, () => {
    console.log('API ONLINE');
})