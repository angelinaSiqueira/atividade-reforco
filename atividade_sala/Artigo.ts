import { MaterialLeitura } from "./MaterialLeitura";

export class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    static artigos: Artigo[] = [];

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe(titulo: string): void {
        for (const artigo of Artigo.artigos) {
            if (artigo.titulo == titulo) {
                console.log(`titulo: ${this.titulo}, autor: ${this.autor}, data de publicacao: ${this.dataPublicacao}`);
            }
        }
    }

    cadastrarArtigo(): void {
        if (Artigo.artigos.push(this)) {
            console.log(`artigo ${this.titulo} cadastrado`);
        }
        else {
            console.log("erro ao cadastrar");
        }
    }
}