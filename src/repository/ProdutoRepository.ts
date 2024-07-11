import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    // metodos do CRUD

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
    tamanho(): void;
    
}
