module.exports = class Alunos {

    constructor() {
        this.nome = "";
        this.turma = "";
        this.telefone = "";
        this.matricula = "";
        this.email = "";
        this.comite = "";
        this.delegacao = "";
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

    setMatricula(ma) {
        this.matricula = ma;
    }
    getMatricula (){
        return this.matricula;
    }

    setEmail(em) {
        this.email = em;
    }

    getEmail() {
        return this.email;
    }
  
    setComite(ct) {
        this.comite = ct;
    }
    getComite(){
        return this.comite;
    }

    setDelegacao(d) {
        this.delegacao = d;
    }
    getDelegacao (){
        return this.delegacao;
    }


    inserir(connection) {
        try {
            var sql = "INSERT INTO alunosTIB (nome,turma,telefone,matricula,email,comite,cargo) VALUES(?,?,?,?,?,?,?)";
            connection.query(sql, [this.nome, this.turma, this.telefone, this.matricula, this.email, this.comite, this.delegacao],
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
        var sql = "SELECT * FROM alunosTIB";

        connection.query(sql, function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }


    pesquisar(connection, callback) {
        var sql = "SELECT * FROM alunosTIB WHERE matricula like ?";

        connection.query(sql, [this.matricula], function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }
    deletar(connection) {
        var sql = "DELETE FROM alunosTIB WHERE matricula =  ?";

        connection.query(sql, [this.matricula], function (err, result) {
            //if (err) throw "teste";
            if (err) throw 'err from callback: ' + err.stack;
        });
    }

    consultarChave(connection, callback) {
        var sql = "SELECT * FROM alunosTIB WHERE matricula = ?";

        connection.query(sql, [this.matricula], function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }

    atualizar(connection) {
        try {
            var sql = "UPDATE alunosTIB SET nome = ?, turma = ?, telefone = ?, matricula = ?, email = ?, comite = ?, delegacao = ?";

            connection.query(sql, [this.nome, this.turma, this.telefone, this.matricula, this.email, this.comite, this.delegacao], function (err, result) {
                //if (err) throw "teste";
                if (err) throw 'err from callback: ' + err.stack;
            });
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
    }
}