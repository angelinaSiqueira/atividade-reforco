import { materialLeitura } from "./materialLeitura";

export class Livro implements materialLeitura{
    titulo: string    
    autor: string       
    numeroPagina: number
    
    constructor(titulo: string, autor: string, numeroPagina: number){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;
    }

    exibirDetalhes(){
        console.log(`Livro:${this.titulo}, Autor:${this.autor}, pagina: ${this.numeroPagina}`);
    }
}