import { MaterialLeitura } from './MaterialLeitura';

export class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe(): void {
        console.log(`Artigo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}`);
    }
}