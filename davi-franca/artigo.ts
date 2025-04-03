import { materialLeitura } from "./materialLeitura";

export class Artigo implements materialLeitura{
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhes(){
        console.log(`titulo:${this.titulo}, Autor:${this.autor}, dataPublicacao: ${this.dataPublicacao}`);
    }
}