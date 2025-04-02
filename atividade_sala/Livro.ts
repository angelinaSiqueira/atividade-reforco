import { MaterialLeitura } from "./MaterialLeitura";

export class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numberPaginas: number;

    static livros: Livro[] = [];

    constructor(titulo: string, autor: string, numberPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numberPaginas = numberPaginas;
    }

    exibirDetalhe(titulo: string): void {
        for (const livro of Livro.livros) {
            if (livro.titulo == titulo) {
                console.log(`titulo: ${livro.titulo}, autor: ${livro.autor}, numero paginas: ${livro.numberPaginas}`);
            }
        }
    }

    cadastrarLivro(): void {
        if (Livro.livros.push(this)) {
            console.log(`livro ${this.titulo} cadastrado`)
        } else {
            console.log("falha ao cadastrar")
        }
    }
}