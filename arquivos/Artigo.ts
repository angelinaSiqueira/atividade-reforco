import { MaterialLeitura } from "../arquivos/MaterialLeitura";

class Artigo {

    titulo: string;
    autor: string;
    artigoPublicacao: Date; 

    constructor(titulo: string, autor: string, artigoPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.artigoPublicacao = artigoPublicacao;
    }
}