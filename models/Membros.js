const Cargos = require('./Cargos');
module.exports = class Membros{

    constructor(){

        this.nome = "";
        this.turma = "";
        this.telefone = "";
        this.email = "";
        this.escola = "";
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

    setEscola(es) {
        this.escola = es;
    }

    getEscola() {
        return this.escola;
    }

    inserir(connection) {
        try {
            var sql = "INSERT INTO membros (nome,turma,telefone,email,escola) VALUES(?, ?, ?, ?, ?)";
    
            connection.query(sql, [this.nome, this.turma, this.telefone, this.email, this.escola], function (err, result) {
              if (err) throw "teste";
              //if (err) console.error('err from callback: ' + err.stack);
              });
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
      }
}