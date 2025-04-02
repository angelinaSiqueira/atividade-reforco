import { MaterialLeitura } from "./MaterialLeitura";

export class Revista implements MaterialLeitura{
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo:string, autor:string, edicao:number){
        this.autor=autor;
        this.titulo=titulo;
        this.edicao=edicao;
    }

    exibirDetalhe(): void {
        console.log("Título: " + this.titulo + ", autor: " + this.autor + " e edição: " + this.edicao);
    }

}