import { MaterialLeitura } from "./materialLeitura";


class Livro implements MaterialLeitura{

    titulo: string;
    autor: string;
    numeroPagina: number;
    

constructor(titulo:string,autor:string,numeroPagina: number){
   this.titulo=titulo;
   this.autor=autor;
   this.numeroPagina=numeroPagina; 
}
exibirDetalhe(): void {
    console.log(`Autor: ${this.autor} / Titulo: ${this.titulo} / Páginas: ${this.numeroPagina}`)
    }
}
const Livros= new Livro("fulano","poesias",153)
Livros.exibirDetalhe();