import { MaterialLeitura } from "./MaterialLeitura";

class Revista implements MaterialLeitura {
    titulo : string;
    autor : string;
    edicao : number;

constructor (titulo: string, autor:string , edicao : number){
    this.titulo = titulo;
    this.autor=autor;
    this.edicao = edicao;

}
ExibirDetalhes (titulo : string, autor : string, ) : void {
console.log `titlulo é: ${this.titulo}, o autor é: ${this.autor}, e a edição é a ${this.edicao} `;

}

}