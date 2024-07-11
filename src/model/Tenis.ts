import { Produto } from "./Produto";

export class Tenis extends Produto {

    private _jordan: string;

    constructor(tamanho: string, tipo: number, nome: string, preco: number, id: number, jordan: string) {
        super(tamanho, tipo, nome, preco, id)
        this._jordan = jordan;
    }
    
   
	public get jordan(): string {
		return this._jordan;
	}

    public set jordan(value: string) {
		this._jordan = value;
	}
    public visualizar() {
        super.visualizar();
        console.log(`o produto escolhido foi um jordan. ${this.jordan}`);

    }
}