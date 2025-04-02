import {MaterialLeitura} from "./MaterialLeitura";

export class Artigo implements MaterialLeitura {
    titulo: string;
    autor: String;
    dataPublicacao: Date;

    constructor (titulo: string, autor: string, dataPublicacao: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe():void{
        console.log(`titulo: ${this.titulo}, autor: ${this.autor}, data da publicação: ${this.dataPublicacao}`);
    }
    
}