module.exports = class Alunos {

    constructor() {
        this.nome = "";
        this.turma = "";
        this.telefone = "";
        this.email = "";
        this.curso = "";
        this.escola = "";
        this.matricula = "";
        this.endereco = "";
        this.cargo = "";
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

    setEscola(es) {
        this.escola = es;
    }

    getEscola() {
        return this.escola;
    }

    setMatricula(ma) {
        this.matricula = ma;
    }
    getMatricula (){
        return this.matricula;
    }

    getEscola() {
        return this.matricula;
    }

    setEndereco(en) {
        this.endereco = en;
    }

    getEndereco() {
        return this.endereco;
    }

    setCargo(ca) {
        this.cargo = ca;
    }

    getCargo() {
        return this.cargo;
    }


    inserir(connection) {
        try {
            var sql = "INSERT INTO membros (nome,turma,telefone,email,curso,ano,escola,matricula,endereco,cargo) VALUES(?,?,?,?,?,?,?,?,?,?)";
            connection.query(sql, [this.nome, this.turma, this.telefone, this.email, this.curso, this.ano, this.escola, this.matricula, this.endereco, this.cargo],
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
        var sql = "SELECT * FROM membros";

        connection.query(sql, function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }


    pesquisar(connection, callback) {
        var sql = "SELECT * FROM membros WHERE cargo like ?";

        connection.query(sql, [this.cargo], function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }
    deletar(connection) {
        var sql = "DELETE FROM membros WHERE cargo =  ?";

        connection.query(sql, [this.cargo], function (err, result) {
            //if (err) throw "teste";
            if (err) throw 'err from callback: ' + err.stack;
        });
    }

    consultarChave(connection, callback) {
        var sql = "SELECT * FROM membros WHERE cargo = ?";

        connection.query(sql, [this.cargo], function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }

    atualizar(connection) {
        try {
            var sql = "UPDATE alunos SET nome = ?, turma = ?, telefone = ?, email = ?, curso = ?, ano = ?, escola = ?, matricula = ?, endereco = ?, cargo = ?";

            connection.query(sql, [this.nome, this.turma, this.telefone, this.email, this.curso, this.ano, this.escola, this.matricula, this.endereco, this.cargo], function (err, result) {
                //if (err) throw "teste";
                if (err) throw 'err from callback: ' + err.stack;
            });
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
    }
}