import { MaterialLeitura } from "./MaterialLeitura";
export class Livro implements MaterialLeitura {
    constructor(public titulo: string, public autor: string, public numeroPaginas: number) {}

    exibirDetalhes(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.numeroPaginas}`);
    }
}