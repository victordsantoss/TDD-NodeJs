const app = require('./routes/server');
const port = 8081;

app.listen(port, () => {
    console.log(`Servidor Rodando na url http://localhost:${8081}`);
});

