class CriarAlgo {
  _batata;
  _melao;

  set setMelao(melao){
    this._melao = melao
  }

  get getMelao(){
    return this._melao
  }


}

const criandoAlgo = new CriarAlgo()

criandoAlgo.setMelao = 'melao'
console.log(criandoAlgo.constructor == CriarAlgo)

