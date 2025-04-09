import { MaterialLeitura } from "./materialLeitura";


class artigo implements MaterialLeitura{
    autor: string;
    titulo: string;
    dataPublicacao: Date;

 constructor(autor: string,titulo: string,dataPublicacao: Date){
    this.autor=autor;
    this.titulo=titulo
    this.dataPublicacao=dataPublicacao


}
exibirDetalhe(): void {
    console.log(`Autor: ${this.autor} / Titulo: ${this.titulo} / Data da Publicação: ${this.dataPublicacao}`)
}
}
const artigos = new artigo("fulano","ciências",new Date(3,4,2025));

artigos.exibirDetalhe();