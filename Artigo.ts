import { MaterialLeitura } from "./MaterialLeitura";
export class Artigo implements MaterialLeitura{
    titulo: string;
    autor: string;
    dataPublicaçao:Date;

    constructor(titulo:string, autor:string, dataPublicaçao:Date){
        this.titulo=titulo;
        this.autor=autor;
        this.dataPublicaçao=dataPublicaçao;
    }
    ExibirDetalhe(): void {
        console.log("titulo" + this.titulo + "autor" + this.autor + "dataPublicaçao" +this.dataPublicaçao)
    }
    }