const app = require('./src/app')
const port = 8000

app.listen(port, (err) => {
    if (err) {
        return console.log('Erro ao carregar');
    }
    console.log(`Iniciou em http://localhost:${port}`)
});