import { MaterialLeitura } from "../arquivos/MaterialLeitura";

class Revista {

    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
}