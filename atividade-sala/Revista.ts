
import { MaterialLeitura } from "./material-leitura";{}
export class Revista implements MaterialLeitura{
    titulo: string
    autor: string
    edicao: number

    constructor(titulo:string, autor: string, edicao:number){
        this.titulo = titulo
        this.autor = autor
        this.edicao = edicao
    }
    exibirDetalhe(): void {
        console.log("titulo:" + this.titulo + "/ autor: " + this.autor + "/ edição:" + this.edicao )
    }
}