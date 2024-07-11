import { Produto } from "./Produto";

export class Camisetas extends Produto {

    private _regata: string;

    constructor(tamanho: string, tipo: number, nome: string, preco: number, id: number, regata: string) {
        super(tamanho, tipo, nome, preco, id)
        this._regata = regata;
    }
    
   
	public get regata(): string {
		return this._regata;
	}

    public set regata(value: string) {
		this._regata = value;
	}
    public visualizar() {
        super.visualizar();
        console.log(`o produto escolhido foi uma regata. ${this.regata}`);

    }
}