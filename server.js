const http = require('http');

const porta = 3000;

const ambiente = process.env.AMBIENTE || "local";
const senha = process.env.SENHA || "sem senha";

const server = http.createServer((req, res) => {
    res.end(`
Ambiente: ${ambiente}

Senha: ${senha}
`);
});

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});