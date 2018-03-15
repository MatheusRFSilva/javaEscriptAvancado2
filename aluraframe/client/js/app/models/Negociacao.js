class Negociacao {
    constructor(data,quantidade,valor){
      this._data = new Date(data.getTime());
      this._quantidade = quantidade ;
      this._valor = valor;
      /*Congela o Objeto e não permite alteração*/
      Object.freeze(this);
    }

    /*Metodo*/
    get volume(){
      return this._quantidade * this._valor;
    }

    get data(){
      return new Date(this._data.getTime());
    }
    get quantidade(){
      return this._quantidade;
    }
    get valor(){
      return this._valor;
    }
}
