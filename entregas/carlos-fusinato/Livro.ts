import { MaterialLeitura } from './MaterialLeitura';

export class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;
    }

    exibirDetalhe(): void {
        console.log(`Livro: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Número de Páginas: ${this.numeroPagina}`);
    }
}