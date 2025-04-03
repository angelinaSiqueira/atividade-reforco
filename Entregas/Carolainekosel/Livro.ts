import { MaterialLeitura } from "./MaterialLeitura";

class Livro implements MaterialLeitura {
    titulo : string   ;   
   autor: string  ;     
numeroPagina : number ;

Constructor (titulo: string, autor:string , numeroPagina : number){
this.titulo = titulo;
this.autor=autor;
this.numeroPagina= numeroPagina;
}

ExibirDetalhes (titulo : string, autor : string, numeroPagina : number) : void {
console.log `titlulo é: ${this.titulo}, o autor é: ${this.autor}, e o numero da página é ${ this.numeroPagina}  `;
}
}