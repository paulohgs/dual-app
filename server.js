const app = require('./src/app')

app.listen(8000, (err) => {
    if (err) {
        return console.log('Erro ao carregar');
    }
    console.log('Iniciou em http://localhost:8000')
});