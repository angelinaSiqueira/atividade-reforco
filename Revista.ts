import { MaterialLeitura } from "./MaterialLeitura";
export class Revista implements MaterialLeitura{
    titulo: string;
    autor: string;
    ediçao:number;

    constructor(titulo:string, autor:string, ediçao:number){
        this.titulo=titulo;
        this.autor=autor;
        this.ediçao=ediçao;
    }
    ExibirDetalhe(): void {
        console.log("titulo" + this.titulo + "autor" + this.autor + "ediçao" +this.ediçao)
    }
    }