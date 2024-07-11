import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    [x: string]: any;


    tamanho(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar()
        }
    }

    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;


    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar()
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO Produto foi cadastrada com sucesso!")
    }

    procurarPorId(id: number): void {
        let buscarProduto = this.buscarNoArray(id);
        if (buscarProduto !== null)
            buscarProduto.visualizar();
        else
            console.log("\nO Produto não foi encontrado!");
    }

    atualizar(produto: Produto): void {

        let buscarProduto = this.buscarNoArray(produto.id)
        if (buscarProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)] = produto;
            console.log("\nO produto: " + produto.id + "Foi atualizado com sucesso!");

        } else
            console.log("\nO produto: " + produto.id + "\n Nao foi localizado!");
    }

    deletar(id: number): void {
        let buscarProduto = this.buscarNoArray(id);

        if (buscarProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProduto), 1);
            console.log("\nO Produto foi excluído!")
        } else
            console.log("\nO Produto não foi encontrado!");
    }

    public gerarid(): number {
        return ++this.id;
    }
    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }

}

