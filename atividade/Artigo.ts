import { MaterialLeitura } from "./MaterialLeitura";

export class Artigo implements MaterialLeitura{
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date){
        this.autor=autor;
        this.titulo=titulo;
        this.dataPublicacao=dataPublicacao;
    }

    exibirDetalhe(): void {
        console.log("Título: " + this.titulo + ", autor: " + this.autor + " e data de publicação: " + this.dataPublicacao);
    }

}