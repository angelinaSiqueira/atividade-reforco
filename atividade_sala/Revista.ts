import { MaterialLeitura } from "./MaterialLeitura";

class Revista implements MaterialLeitura{
    titulo: string;
    autor: string;
    edicao: number;

    static revistas: Revista[] = [];

    constructor(titulo: string, autor: string, edicao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirDetalhe(titulo: string): void {
        for (const revista of Revista.revistas){
            if(revista.titulo == titulo){
                console.log(`titulo: ${revista.titulo}, autor: ${revista.autor}, edicao: ${revista.edicao}`);
            }
        }
    }

    cadastrarRevista(): void{
        if (Revista.revistas.push(this)){
            console.log(`revista ${this.titulo} cadastrada`);
        }
        else{
            console.log("falha ao cadastrar");
        }
    } 
}