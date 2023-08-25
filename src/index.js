const express = require('express');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes');

server.use(express.json());

server.use('/task', TaskRoutes);

server.get('/teste', (req, res) => {
    res.send('TUDO CERTO COM A API!');
});

server.listen(3333, () => {
    console.log('API ONLINE');
})