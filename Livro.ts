import { MaterialLeitura } from "./MaterialLeitura";

export class Livro implements MaterialLeitura{
    titulo: string;
    autor: string;
    numeroPagina:number;

    constructor(titulo:string, autor:string, numeroPagina:number){
        this.titulo=titulo;
        this.autor=autor;
        this.numeroPagina=numeroPagina;
    }
    ExibirDetalhe(): void {
        console.log("titulo" + this.titulo + "autor" + this.autor + "numeroPagina" +this.numeroPagina)
    }
    }