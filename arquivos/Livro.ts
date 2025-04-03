import { MaterialLeitura } from "../arquivos/MaterialLeitura";

class Livro {

    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;
    }

    exibirDetalhe(): string {
        return this.titulo + this.autor
    }
}