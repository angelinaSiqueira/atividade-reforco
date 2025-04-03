import { MaterialLeitura } from "./MaterialLeitura";


class Revista implements MaterialLeitura{
    titulo: String;
    autor: String;
    edicao: number;

    constructor(titulo:String, autor:String, edicao: number){
        this.titulo=titulo;
        this.autor=autor;
        this.edicao=edicao;
    }
 
    exibirDetalhe(): void {
    console.log("título: "+this.titulo+" Autor: "+this.autor+" Edição: "+this.edicao)
    }
}

const exibir = new Revista("Harry Potter", "Js Collin", 3)
exibir.exibirDetalhe()