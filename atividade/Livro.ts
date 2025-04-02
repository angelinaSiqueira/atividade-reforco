import {MaterialLeitura} from "./MaterialLeitura";

export class Livro implements MaterialLeitura {
    titulo: string;
    autor: String;
    numeroPagina: number;

    constructor (titulo: string, autor: string, numeroPagina: number){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina
    }

    exibirDetalhe():void{
        console.log(`titulo: ${this.titulo}, autor: ${this.autor}, numero de paginas: ${this.numeroPagina}`)
    }
    
}