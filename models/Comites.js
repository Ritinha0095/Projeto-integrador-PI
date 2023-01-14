const Alunos = require('./Alunos');


module.exports = class Comites{

    constructor(){

        this.delegacoes = "";
        this.temas = "";
        this.mesas = "";
        this.orgao = "";
    }

    setDelegacoes(d){
        this.delegacoes = d;
    }

    getDelegacoes(){
        return this.delegacoes;
    }

    setTemas(t){
        this.temas = t;
    }

    getTemas(){
        return this.temas;
    }

    setMesas(m){
         this.mesas= m;
    }

    getMesas(){
        return this.mesas;
    }

    setOrgao(org){
        this.orgao= org;
   }

   getOrgao(){
       return this.orgao;
   }

    inserir(connection) {
        try {
            var sql = "INSERT INTO comites (delegados,temas,mesas) VALUES(?, ?, ?)";
    
            connection.query(sql, [this.delegados, this.temas, this.mesas], function (err, result) {
              if (err) throw "teste";
              //if (err) console.error('err from callback: ' + err.stack);
              });
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
      }
}