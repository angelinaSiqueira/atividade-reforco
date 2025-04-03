import { MaterialLeitura } from "./MaterialLeitura";


class Livro implements MaterialLeitura{
    titulo: String;
    autor: String;
    numeroPg: number;

    constructor(titulo:String, autor:String, numeroPg:number){
        this.titulo=titulo;
        this.autor=autor;
        this.numeroPg=numeroPg;
    }
 
    exibirDetalhe(): void {
    console.log("título: "+this.titulo+" Autor: "+this.autor+" Número de páginas: "+this.numeroPg)
    }
}

const exibir = new Livro("Harry Potter", "Js Collin", 355)
exibir.exibirDetalhe()