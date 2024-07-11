import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";
import { Produto } from "./src/model/Produto";
import { Camisetas } from "./src/model/Camiseta";
import { ProdutoController } from "./src/ProdutoController.ts/ProdutoController";
import { Tenis } from "./src/model/Tenis";

export function main() {

    let tamanho: string;
    let tipo, nome: string;
    let opcao, preco, id, numero: number; //a variavel opcao percorre todo o menu
    let tipoProduto = ['Camiseta', 'Tenis'];

    const produtoController: ProdutoController = new ProdutoController();


    console.log(colors.fg.magentastrong, "\n\nSeja Bem vindo, informe seu Nome Abaixo para melhor atende-lo!\n\n", colors.reset);
    nome = readlinesync.question("")

    while (true) {


        console.log(colors.bg.black, colors.fg.magentastrong,
            "/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/");
        console.log("                                                     ");
        console.log("                ESPORTE É VIDA!                      ");
        console.log("                                                     ");
        console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/");
        console.log("                                                     ");
        console.log("            1 - Listar todos os Produtos             ");
        console.log("            2 - Listar Produtos pelo Id              ");
        console.log("            3 - Cadastrar Produtos                   ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/");
        console.log("                                                      ",
            colors.reset);



        console.log("Insira a opcao desejada: ");
        opcao = readlinesync.questionInt("");


        if (opcao == 6) {


            console.log(colors.fg.greenstrong,
                "\nJuntos Venceremos!")
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:

                console.log("\nListar todos os Produtos");
                produtoController.listarTodos();
                keyPress()
                break;
            case 2:

                console.log("\nListar Produto pelo Id");
                id = readlinesync.questionInt("Digite o Id do Produto Que Deseja Buscar: ");
                produtoController.procurarPorId(id);

                keyPress()
                break;
            case 3:

                console.log("\n\nCadastrar Produtos\n\n");
                console.log("\nInforme o numero id do produto que Deseja Cadastrar");
                id = readlinesync.questionInt("")

                console.log("\nInforme qual produto deseja Cadastrar?");
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                console.log("Informe o Tamanho do Seu Produto Escolhido: ")
                tamanho = readlinesync.question("");

                console.log("Informe o Preco do Produto:");
                preco = readlinesync.questionFloat("")

                if (tipo === 1) {
                    console.log("Informe o modelo do Produto");
                    let regata = readlinesync.question("")
                    produtoController.cadastrar(new Camisetas(tamanho, tipo, nome, preco, id, regata));
                } else {
                    console.log("Informe o modelo do Tênis");
                    let tenis = readlinesync.question("")
                    produtoController.cadastrar(new Tenis(tamanho, tipo, nome, preco, id, tenis));

                }


                console.log("\nProduto Cadastrado com Sucesso!\n");

                keyPress()
                break;
            case 4:


                console.log("\n\nAtualizar dados do Produto\n\n", colors.reset);
                id = readlinesync.questionInt("Digite o Id do Produto: ");

                let produto = produtoController.buscarNoArray(id);

                if (produto !== null) {

                    nome = readlinesync.question("Digite o Nome do Produto: ");
                    tipo = produto.tipo;
                    preco = readlinesync.questionFloat("Digite o preco: ");
                    tamanho = produto.tamanho

                    switch (tipo) {
                        case 1:
                            let calcado
                            calcado = readlinesync.question("Digite o modelo do tenis: ");
                            produtoController.atualizar(new Tenis(tamanho, tipo, nome, preco, id, calcado));
                            console.log("Produto atualizado com sucesso.");
                            
                            break;
                        case 2:
                        
                            let regata = readlinesync.question("Digite o modelo da camisa: ");
                            produtoController.atualizar(new Camisetas(tamanho, tipo, nome, preco, id, regata));
                            console.log("Produto atualizado com sucesso.");

                            break;

                            keyPress()
                            break;
                        case 5:

                            console.log("\nApagar um Produto ");
                            id = readlinesync.questionInt("Digite o Id do Produto: ");
                            produtoController.deletar(id);

                            keyPress()
                            break;
                        default:
                            console.log("\n Esta opção esta invalida, Informe uma opção de acordo com o Menu!");

                            keyPress()
                            break;
                    }
                }
        }

        function sobre(): void {
            console.log("\n><><><><><><><><><><><><><><><><><><><><><><><><><><>");
            console.log("Projeto Desenvolvido por: Everrton Pinheiro Sales Figueiredo ");
            console.log("Generation Brasil - everton.figueiredo@genstudents.org");
            console.log("https://github.com/Evertonpsf");
            console.log("><><><><><><><><><><><><><><><><><><><><><><><><><><><");
        }
        function keyPress(): void {
            console.log(colors.reset, "");
            console.log("\nPressione enter para continuar...");
            readlinesync.prompt();
        }
    }

}
main();