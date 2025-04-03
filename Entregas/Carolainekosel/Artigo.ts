import { MaterialLeitura } from "./MaterialLeitura";

class Artigo implements MaterialLeitura {
    titulo : string;
    autor : string;
    datapublicacao : Date;

    Constructor (titulo: string, autor:string , datapublocacao : Date){
        this.titulo = titulo;
        this.autor=autor;
        this.datapublicacao = datapublocacao;
    }

ExibirDetalhes (titulo : string, autor : string, ) : void {
console.log `titlulo é: ${this.titulo}, o autor é: ${this.autor} e a data de publicação: ${this.datapublicacao}`;
}

}
