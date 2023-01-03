const Membros = require('./Membros');

module.exports = class Cargos{
    constructor(){

        this.presidente = "";
        this.vicePresidente = "";
        this.financeiro = "";
        this.comunicacao= "";
        this.designerSimu = "";
        this.ano = "";

    }
    setPresidente(p){
        this.presidente = p;
    }

    getPresidente(){
        return this.presidente;
    }

    setVicePresidente(vp){
        this.vicePresidente = vp;
    }

    getVicePresidente(){
        return this.vicePresidente;
    }

    setFinanceiro(f){
        this.financeiro = f;
    }

    getFinanceiro(){
        return this.financeiro;
    }

    setComunicacao(co){
        this.comunicacao = co;
    }

    getComunicacao(){
        return this.comunicacao;
    }

    setDesignerSimu(de){
        this.designerSimu = de;
    }

    getDesignerSimu(){
        return this.designerSimu;
    }

    setAno(ano){
        this.ano = ano;
    }

    getAno(){
        return this.ano;
    }

    inserir(connection){
        try{
            var sql = "INSERT INTO cargos (presidente,vice_presidente,financeiro,comunicacao,designerDeSimulacao) VALUES (?,?,?,?,?)"

            connection.query(sql, [this.presidente, this.vicePresidente, this.financeiro, this.comunicacao, this.designerSimu], function (err, result){
                if(err) throw "teste"
            });
        } catch (e){
            console.error('err from callback: ' + e.stack);
            throw e;
        }
    }


}