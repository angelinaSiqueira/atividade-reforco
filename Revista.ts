import { MaterialLeitura } from "./materialLeitura";



class revista implements MaterialLeitura{
    autor: string;
    titulo: string;
    edicao: number 

    constructor( autor: string,titulo: string,edicao: number){
        this.autor=autor;
        this.titulo=titulo;
        this.edicao=edicao;

    }
exibirDetalhe(): void {
    console.log(`Autor: ${this.autor} / Titulo: ${this.titulo} / Edição: ${this.edicao}`)
}
}
const revistas = new revista("fulano","noticias",45);
revistas.exibirDetalhe();