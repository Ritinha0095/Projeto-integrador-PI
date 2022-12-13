module.exports = class Orgaos {

    constructor(){
        this.CDH = "";
        this.CNUDH = "";
        this.ACNUR = "";
        this.CSNU = "";
        this.OEA = "";
        this.OMS = "";
        this.AC = "";
        this.gabinete = "";
    }

    setCDH(cdh){
        this.CDH = cdh ;
    }

    getCDH(){
        return this.CDH;
    }

    setCNUDH(cnudh){
        this.CNUDH = cnudh;
    }

    getCNUDH(){
        return this.CNUDH;
    }

    setACNUR(acnur){
        this.ACNUR = acnur;
    }

    getACNUR(){
        return this.ACNUR;
    }

    setCSNU(csnu){
        this.CSNU = csnu;
    }

    getCSNU(){
        return this.CSNU;
    }

    setOEA(oea){
        this.OEA = oea;
    }

    getOEA(){
        return this.OEA;
    }

    setOMS(oms){
        this.OMS = oms;
    }

    getOMS(){
        return this.OMS;
    }

    setAC(ac){
        this.AC = ac;
    }

    getAC(){
        return this.AC;
    }

    setGabinete(g){
        this.gabinete = g;
    }

    getGabinete(){
        return this.gabinete;
    }

    inserir(connection) {
        try {
            var sql = "INSERT INTO orgaos (CDH, CNUDH, ACNUR, CSNU, OEA, OMS, AC, gabinete) VALUES(?, ?, ?, ?, ?, ?, ?)";
    
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