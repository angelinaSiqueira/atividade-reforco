import { MaterialLeitura } from "./material-leitura";
export class Artigo implements MaterialLeitura{
    titulo: string
    autor: string
    datapublicacao: Date
    constructor(titulo:string, autor: string, datapublicacao: Date){
        this.titulo = titulo
        this.autor = autor
        this.datapublicacao = datapublicacao
    }
    exibirDetalhe(): void {
        console.log("titulo:" + this.titulo + "/ autor: " + this.autor + "/ data de publicação: " + this.datapublicacao)
    }
    
    
}