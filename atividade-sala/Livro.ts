import { MaterialLeitura } from "./MaterialLeitura";
export class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;
    }
    
    exibirDetalhe(): void {
        console.log("Título: " + this.titulo + ", autor: "+ this.autor + ", número da página: " + this.numeroPagina)
    }
}