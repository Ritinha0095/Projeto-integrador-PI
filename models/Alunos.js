const Escolas = require('./Escolas');

module.exports = class Alunos{

    constructor(){

        this.nome = "";
        this.turma = "";
        this.telefone = "";
        this.email = "";
        this.curso = "";
        this.escola = "";
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

    setCurso(cu){
        this.curso = cu;
    }

    getCurso(){
        return this.curso;
    }

    setEscola(es) {
        this.escola = es;
    }

    getEscola() {
        return this.escola;
    }

    setEndereco(en){
        this.endereco = en;
    }
    
    getEndereco(){
        return this.endereco;
    }

    inserir(connection) {
        try {
            var sql = "INSERT INTO alunos (nome,turma,telefone,email,curso,endereco,escola) VALUES(?, ?, ?, ?, ?, ?, ?)";
    
            connection.query(sql, [this.nome, this.turma, this.telefone, this.email, this.curso, this.endereco, this.escola], function (err, result) {
              if (err) throw "teste";
              //if (err) console.error('err from callback: ' + err.stack);
              });
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
      }
}