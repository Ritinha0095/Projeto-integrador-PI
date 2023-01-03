module.exports = class Alunos {

    constructor() {
        this.nome = "";
        this.turma = "";
        this.telefone = "";
        this.email = "";
        this.curso = "";
        this.ano = "";
        this.escola = "";
        this.matricula = "";
        this.endereco = "";
    }

    setNome(n) {
        this.nome = n;
    }

    getNome() {
        return this.nome;
    }

    setTurma(tu) {
        this.turma = tu;
    }

    getTurma() {
        return this.turma;
    }

    setTelefone(te) {
        this.telefone = te;
    }

    getTelefone() {
        return this.telefone;
    }

    setEmail(em) {
        this.email = em;
    }

    getEmail() {
        return this.email;
    }

    setCurso(cu) {
        this.curso = cu;
    }

    getCurso() {
        return this.curso;
    }

    setAno(a) {
        this.ano = a;
    }

    getAno() {
        return this.a;
    }

    setEscola(es) {
        this.escola = es;
    }

    getEscola() {
        return this.escola;
    }

    setMatricula(ma) {
        this.matricula = ma;
    }

    getMatricula() {
        return this.matricula;
    }

    setEndereco(en) {
        this.endereco = en;
    }

    getEndereco() {
        return this.endereco;
    }


    inserir(connection) {
        try {
            var sql = "INSERT INTO alunos (nome,turma,telefone,email,curso,ano,escola,matricula,endereco) VALUES(?,?,?,?,?,?,?,?,?)";
            connection.query(sql, [this.nome, this.turma, this.telefone, this.email, this.curso, this.ano, this.escola, this.matricula, this.endereco],
                function (err, result) {
                    //if (err) throw "teste";
                    if (err) throw 'err from callback: ' + err.stack;
                });
        }
        catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
    }

    listar(connection, callback) {
        var sql = "SELECT * FROM alunos";

        connection.query(sql, function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }


    pesquisar(connection, callback) {
        var sql = "SELECT * FROM alunos WHERE nome like ?";

        connection.query(sql, [this.nome], function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }
    deletar(connection) {
        var sql = "DELETE FROM alunos WHERE matricula =  ?";

        connection.query(sql, [this.matricula], function (err, result) {
            //if (err) throw "teste";
            if (err) throw 'err from callback: ' + err.stack;
        });
    }

    consultarChave(connection, callback) {
        var sql = "SELECT * FROM alunos WHERE matricula = ?";

        connection.query(sql, [this.matricula], function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }

    atualizar(connection) {
        try {
            var sql = "UPDATE alunos SET nome = ?, turma = ?, telefone = ?, email = ?, curso = ?, ano = ?, escola = ?, matricula = ?, endereco = ?";

            connection.query(sql, [this.nome, this.turma, this.telefone, this.email, this.curso, this.ano, this.escola, this.matricula, this.endereco], function (err, result) {
                //if (err) throw "teste";
                if (err) throw 'err from callback: ' + err.stack;
            });
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
    }
}