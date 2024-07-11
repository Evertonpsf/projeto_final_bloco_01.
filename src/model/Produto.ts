export abstract class Produto {

    private _tamanho: string;
    private _tipo: number;
    private _nome: string;
    private _preco: number;
    private _id: number;

	constructor(tamanho: string, tipo: number, nome: string, preco: number, id: number) {
		this._tamanho = tamanho;
		this._tipo = tipo;
		this._nome = nome;
		this._preco = preco;
		this._id = id;

}
	public get tamanho(): string {
		return this._tamanho;
	}

	public get tipo(): number {
		return this._tipo;
	}


	public get nome(): string {
		return this._nome;
	}

   
	public get preco(): number {
		return this._preco;
	}

   
	public get id(): number {
		return this._id;
	}

    
	public set tamanho(value: string) {
		this._tamanho = value;
	}

    
	public set tipo(value: number) {
		this._tipo = value;
	}

    
	public set nome(value: string) {
		this._nome = value;
	}

   
	public set preco(value: number) {
		this._preco = value;
	}

    
	public set id(value: number) {
		this._id = value;
	}
    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Camisetas";
                break;

            case 2:
                tipo = "Tênis";
                break;
        }

        console.log("\nDados do Produto:\n");
        console.log("*****************************************************");
        console.log(`Número do id do produto: ${this._id}`);
        console.log(`Tamanhoo do produto: ${this._tamanho}`);
        console.log(`Nome do produto: ${this._nome}`);
        console.log(`Tipo do produto: ${tipo}`);
        console.log(`Preço do produto: ${this._preco.toFixed(2)}`);


        }
}