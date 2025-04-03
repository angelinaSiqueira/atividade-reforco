import { MaterialLeitura } from './MaterialLeitura';

export class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirDetalhe(): void {
        console.log(`Revista: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Edição: ${this.edicao}`);
    }
}