import { MaterialLeitura } from "./MaterialLeitura";


class Artigo implements MaterialLeitura{
    titulo: String;
    autor: String;
    dataPublicacao: Date;

    constructor(titulo:String, autor:String, dataPublicacao:Date){
        this.titulo=titulo;
        this.autor=autor;
        this.dataPublicacao=dataPublicacao;
    }
 
    exibirDetalhe(): void {
    console.log("título: "+this.titulo+" Autor: "+this.autor+" Data da publicação: "+this.dataPublicacao)
    }
}

const exibir = new Artigo("Harry Potter", "Js Collin", new Date(3/5/2007))
exibir.exibirDetalhe()
