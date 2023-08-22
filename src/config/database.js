const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/todo';

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('Conexão com o MongoDB estabelecida'))
    .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

module.exports = mongoose;