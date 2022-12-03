// conexao com o banco 
async function connect(){
    if(global.connection && global.connection.state !== "disconnected")
    return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:fatec@localhost:3306/wb");
    global.connection = connection;
    return connection;
}
// cadastro no banco
async function cliente(nome,nome_social,endereco){
    const con = await connect();
    con.query(`insert into clientes (nome,nome_social,estado,cidade,bairro,rua,numero,codigoPostal,info) 
    values('${nome}','${nome_social}','${endereco.estado}','${endereco.cidade}','${endereco.bairro}',
    '${endereco.rua}','${endereco.numero}','${endereco.codigoPostal}','${endereco.infos}')`)
}
// ver
async function clientesc(){
    const con = await connect();
    return [rows] = await con.query(`select * from clientes;`)
}
// deletar
async function deletar(id,tabela){
    const con = await connect();
    con.query(`DELETE FROM ${tabela}s
    WHERE ${tabela}_id = ${id};`)
}
// editar
async function editarCliente(id,nome,nome_social,endereco){
    const con = await connect();
    con.query(`update clientes 
    set nome = '${nome}',nome_social = '${nome_social}',
    estado = '${endereco.estado}',
    cidade = '${endereco.cidade}',
    bairro = '${endereco.bairro}',
    rua = '${endereco.rua}',
    numero = '${endereco.numero}',
    codigoPostal = '${endereco.codigoPostal}',
    info = '${endereco.infos}'
    where cliente_id = ${id};`)
}

// servidor
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

// cadastro
app.post("/cadastro/cliente", (req, res) => {
    const { nome } = req.body;
    const { nome_social } = req.body;
    const { endereco } = req.body

    cliente(nome,nome_social,endereco)
  });

// ver
app.get("/ver/clientes", (req, resp) => {
    async function main() {
        clientes = await clientesc()
        clientes = clientes[0]
        clis = new Array
        for(k in clientes){
            cli = new Array
            for(i in clientes[k]){
                cli.push(clientes[k][i])
            }
            clis.push(cli)
        }
        resp.send(clis);
    }
        
    main()
    });

// deletar
app.post("/deletar", (req, res) => {
    const { id } = req.body;
    const { tabela } = req.body;
    
    deletar(id,tabela)
}); 

// editar
app.post("/editar/cliente", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { nome_social } = req.body;
    const { endereco } = req.body;

    editarCliente(id,nome,nome_social,endereco)
});



app.listen(3001, () => {
    console.log("rodando na porta 3001");
});