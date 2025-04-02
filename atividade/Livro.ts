import { MaterialLeitura } from "./MaterialLeitura";
export class Livro implements MaterialLeitura{
    titulo: string;
    autor: string;
    numeroPaginas: number;

    constructor(titulo:string, autor:string, numeroPaginas:number){
        this.titulo = titulo;
        this.autor=autor;
        this.numeroPaginas = numeroPaginas;
    }

    exibirDetalhe(): void {
        console.log("Título: " + this.titulo + ", Autor: " + this.autor + " e número de páginas: " + this.numeroPaginas)
    }

}