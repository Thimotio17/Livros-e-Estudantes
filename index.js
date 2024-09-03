const express = require('express');
const bodyParser = require('body-parser');


const livrosRouter = require('./routes/livros');
const estudantesRouter = require('./routes/estudantes');
const alugueisRouter = require('./routes/alugueis');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.use('/livros', livrosRouter);
app.use('/estudantes', estudantesRouter);
app.use('/alugueis', alugueisRouter);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


