import { Produto } from "./Produto";

export class Tenis extends Produto {

    private calcado: string;

    constructor(tamanho: string, tipo: number, nome: string, preco: number, id: number, jordan: string) {
        super(tamanho, tipo, nome, preco, id)
        this.calcado = jordan;
    }
    
   
	public get jordan(): string {
		return this.calcado;
	}

    public set jordan(value: string) {
		this.calcado = value;
	}
    public visualizar() {
        super.visualizar();
        console.log(`o produto escolhido foi um jordan. ${this.jordan}`);

    }
}