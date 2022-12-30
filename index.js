const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.listen(3000, function () {
    console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const Alunos = require('./models/Alunos');
//const Cargos = require('./models/Cargos');
//const Comites = require('./models/Comites');
//const Escolas = require('./models/Escolas');
//const Evento = require('./models/Evento');
const Membros = require('./models/Membros');
//const Orgaos = require('./models/Orgaos');

var mysql = require('mysql');
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

app.get('/cri', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// ************ ALUNOS ************ //

app.get('/alunos', function (req, res) {
    var alu = new Alunos();
    alu.listar(con, function (result) {
        res.render('Alunos/lista.ejs', { alunos: result });
    });
});

app.get('/formAlunos', function (req, res) {
    res.sendFile(__dirname + '/views/Alunos/form.html');
});

app.post('/salvarAlunos', function (req, res) {
    try {
        var alu = new Alunos();

        alu.setNome(req.body.nome);
        alu.setTurma(req.body.turma);
        alu.setTelefone(req.body.telefone);
        alu.setEmail(req.body.email);
        alu.setCurso(req.body.curso);
        alu.setAno(req.body.ano);
        alu.setEscola(req.body.escola);
        alu.setMatricula(req.body.matricula);
        alu.setEndereco(req.body.endereco);

        var retorno = alu.inserir(con);
        console.log('Aqui: ' + retorno);
    } catch (e) {
        console.log('Erro: ' + e.message);
    }
    res.render('Alunos/resultado.ejs', { param: alu, msg: 'Aluno registrado com sucesso!' });
});

app.post('/filtrarAlunos', function (req, res) {
    var alu = new Alunos();
    alu.setNome(req.body.nome);

    if (alu.getNome() == '') {
        alu.setNome('%');
    }

    alu.pesquisar(con, function (result) {
        res.render('Alunos/lista.ejs', { alunos: result });
    });
});

app.post('/gerenciarAluno', function (req, res) {
    var alu = new Alunos();
    if (req.body.acao == 'Excluir') {
        alu.setMatricula(req.body.matricula);
        alu.deletar(con);
        res.render('Alunos/resultado.ejs', { param: alu, msg: 'Aluno excluido do sistema com sucesso!' });
    } else {
        alu.setMatricula(req.body.matricula);
        alu.consultarChave(con, function (result) {
            res.render('Alunos/form.ejs', { alunos: result });
        });
    }
});

app.post('/atualizarAlunos', function (req, res) {
    try {
        var alu = new Alunos();

        alu.setNome(req.body.nome);
        alu.setTurma(req.body.turma);
        alu.setTelefone(req.body.telefone);
        alu.setEmail(req.body.email);
        alu.setCurso(req.body.curso);
        alu.setAno(req.body.ano);
        alu.setEscola(req.body.escola);
        alu.setMatricula(req.body.matricula);
        alu.setEndereco(req.body.endereco);

        var retorno = alu.atualizar(con);
        console.log('Aqui: ' + retorno);

    } catch (e) {
        console.log('Erro: ' + e.message);
    }
    res.render('Alunos/resultado.ejs', { param: alu, msg: 'Aluno atualizado com sucesso!!!' });
});


// ************ MEMBROS-CARGOS ************ //

app.get('/membro', function (req, res) {
    var mem = new Membros();
    mem.listar(con, function (result) {
        res.render('Membros/lista.ejs', { membros: result });
    });
});

app.get('/formMembro', function (req, res) {
    res.sendFile(__dirname + '/views/Membros/form.html');
});

app.post('/salvarMembro', function (req, res) {
    try {
        var mem = new Membros();

        mem.setNome(req.body.nome);
        mem.setTurma(req.body.turma);
        mem.setTelefone(req.body.telefone);
        mem.setEmail(req.body.email);
        mem.setCurso(req.body.curso);
        mem.setAno(req.body.ano);
        mem.setEscola(req.body.escola);
        mem.setMatricula(req.body.matricula);
        mem.setEndereco(req.body.endereco);
        mem.setCargo(req.body.cargo);

        var retorno = mem.inserir(con);
        console.log('Aqui: ' + retorno);
    } catch (e) {
        console.log('Erro: ' + e.message);
    }
    res.render('Membros/resultado.ejs', { param: mem, msg: 'Membro registrado com sucesso!' });
});

app.post('/filtrarMembro', function (req, res) {
    var mem = new Membros();
    mem.setNome(req.body.nome);

    if (mem.getNome() == '') {
        mem.setNome('%');
    }

    mem.pesquisar(con, function (result) {
        res.render('Membros/lista.ejs', { membros: result });
    });
});

app.post('/gerenciarMembro', function (req, res) {
    var mem = new Membros();
    if (req.body.acao == 'Excluir') {
        mem.setCargo(req.body.cargo);
        mem.deletar(con);
        res.render('Membros/resultado.ejs', { param: mem, msg: 'Membro excluido do sistema com sucesso!' });
    } else {
        mem.setCargo(req.body.cargo);
        mem.consultarChave(con, function (result) {
            res.render('Membros/form.ejs', { membros: result });
        });
    }
});

app.post('/atualizarMembros', function (req, res) {
    try {
        var mem = new Membros();

        mem.setNome(req.body.nome);
        mem.setTurma(req.body.turma);
        mem.setTelefone(req.body.telefone);
        mem.setEmail(req.body.email);
        mem.setCurso(req.body.curso);
        mem.setAno(req.body.ano);
        mem.setEscola(req.body.escola);
        mem.setMatricula(req.body.matricula);
        mem.setEndereco(req.body.endereco);
        mem.setCargo(req.body.cargo);

        var retorno = mem.atualizar(con);
        console.log('Aqui: ' + retorno);

    } catch (e) {
        console.log('Erro: ' + e.message);
    }
    res.render('Membros/resultado.ejs', { param: mem, msg: 'Membro atualizado com sucesso!!!' });
});

// ************ TIB ************ //

app.get('//lista', function (req, res) {
    var tib= new TIB();
    tib.listar(con, function (result) {
        res.render('Evento//lista.ejs', { tib: result });
    });
});

app.get('/form', function (req, res) {
    res.sendFile(__dirname + 'Evento/form.html');
});

app.post('/salvarTib', function (req, res) {
    try {
        var tib= new TIB();

        tib.setNome(req.body.nome);
        tib.setTurma(req.body.turma);
        tib.setTelefone(req.body.telefone);
         tib.setMatricula(req.body.matricula);
        tib.setEmail(req.body.email);
        tib.setComite(req.body.comite);
        tib.setDelegacao(req.body.delegacao);

        var retorno = tib.inserir(con);
        console.log('Aqui: ' + retorno);
    } catch (e) {
        console.log('Erro: ' + e.message);
    }
    res.render('Evento/resultado.ejs', { param: tib, msg: 'Delegado registrado com sucesso!' });
});


app.post('/filtrarTib', function (req, res) {
    var tib = new TIB();
    tib.setNome(req.body.nome);

    if (tib.getNome() == '') {
        tib.setNome('%');
    }

    tib.pesquisar(con, function (result) {
        res.render('Evento//lista.ejs', { tib: result });
    });
});

app.post('/gerenciarTib', function (req, res) {
    var tib = new TIB();
    if (req.body.acao == 'Excluir') {
        tib.setMatricula(req.body.matricula);
        tib.deletar(con);
        res.render('Evento/resultado.ejs', { param: tib, msg: 'Delegado excluido do sistema com sucesso!' });
    } else {
        tib.setMatricula(req.body.matricula);
        tib.consultarChave(con, function (result) {
            res.render('Evento/form.ejs', { tib: result });
        });
    }
});

app.post('/atualizarTib', function (req, res) {
    try {
        var tib = new TIB();

        tib.setNome(req.body.nome);
        tib.setTurma(req.body.turma);
        tib.setTelefone(req.body.telefone);
         tib.setMatricula(req.body.matricula);
        tib.setEmail(req.body.email);
        tib.setComite(req.body.comite);
        tib.setDelegacao(req.body.delegacao);

        var retorno = tib.atualizar(con);
        console.log('Aqui: ' + retorno);

    } catch (e) {
        console.log('Erro: ' + e.message);
    }
    res.render('Evento/resultado.ejs', { param: tib, msg: 'Delegado atualizado com sucesso!!!' });
});