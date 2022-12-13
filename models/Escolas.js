module.exports = class Escolas {

    constructor(){

        this.escola = "";
        this.endereco = "";
    }

    setEscola(es){
        this.escola = es;
    }

    getEscola(){
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
            var sql = "INSERT INTO escolas (escola, endereco) VALUES(?, ?)";
    
            connection.query(sql, [this.escola, this.endereco], function (err, result) {
              if (err) throw "teste";
              //if (err) console.error('err from callback: ' + err.stack);
              });
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
      }
}