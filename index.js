
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.listen(3000, function () {
	console.log('Servidor no ar - Porta: 3000!')
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require('mysql');
const Tib = require('./models/Eventos');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "CRI"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Banco de dados conectado!");
});

app.post('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/index', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/alunos', function (req, res) {
	res.sendFile(__dirname + '/views/Alunos/alunos.html');
});

app.get('/cargos', function (req, res) {
	res.sendFile(__dirname + '/views/Cargos/cargos.html');
});

app.get('/comites', function (req, res) {
	res.sendFile(__dirname + '/views/Comites/comites.html');
});

app.get('/voltar', function (req, res) {
	res.sendFile(__dirname + '/views/TIB.html');
});
///////////////////// Evento funções //////////////////////////

app.get('/form', function (req, res) {
	res.sendFile(__dirname + '/views/Evento/form.html');
});

app.get('/inscricao', function (req, res) {

	var ev = new Evento();
	ev.listar(con, function (result) {
		res.render('Evento/lista.ejs', { evento: result });
	});

});

app.post('/filtrarAluno', function (req, res) {
	var ev = new Evento();
	ev.setNome(req.body.nome);

	if (ev.getNome() == '') {
		ev.setNome('%');
	}

	ev.pesquisar(con, function (result) {
		res.render('views/Evento/lista.ejs', { evento: result });
	});
});

app.post('/salvarEvento', function (req, res) {

	try {
		var ev = new Evento();

		ev.setNome(req.body.nome);
		ev.setEscolas(req.body.escola);
		ev.setAno(req.body.ano);
		ev.setTelefone(req.body.telefone);
		ev.setComite(req.body.comite);
		ev.setDelegacao(req.body.delegacao);
		ev.setJustificativa(req.body.justificativa);

		var retorno = ev.inserir(con);
		console.log('Aqui: ' + retorno);
	} catch (e) {
		console.log('Erro: ' + e.message);
	}
});

app.post('/gerenciarLista', function(req, res){
	var ev = new Evento();
	if (req.body.acao == 'Excluir') {
		ev.setNome(req.body.nome);
		ev.deletar(con);
	} else {
		ev.setNome(req.body.nome);
		ev.consultarChave(con, function(result){
			res.render('Evento/form.ejs', {evento: result});
		});
	}	
});

app.get('/tib', function (req, res) {
	res.sendFile(__dirname + '/views/Evento/tib.html');
});

app.get('/mifres', function (req, res) {
	res.sendFile(__dirname + '/views/Evento/mifres.html');
});