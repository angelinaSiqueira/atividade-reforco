import { materialLeitura } from "./materialLeitura";

export class Revista implements materialLeitura{
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
    
    exibirDetalhes(){
        console.log(`titulo:${this.titulo}, Autor:${this.autor}, edicao: ${this.edicao}`);
    }
}