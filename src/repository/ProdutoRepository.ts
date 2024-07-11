import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    // metodos do CRUD

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: number): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
    tamanho(): void;

}
