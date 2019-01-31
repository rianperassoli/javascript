class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);//impede que seja alterado o objeto (exceto a data que é um objeto Date())
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime()); // proteção para o valor do objeto. Assim impede que altere a data (Negociacao.data().setDate(XX))
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }

}