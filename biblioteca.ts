interface MaterialLeitura {
    titulo: string;
    autor: string;
    exibirdetalhe(): void;
}


class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPaginas: number;

    constructor(titulo: string, autor: string, numeroPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    exibirdetalhe(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.numeroPaginas}`);
    }
}


class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirdetalhe(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`);
    }
}


class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirdetalhe(): void {
        console.log(`Artigo: ${this.titulo}, Autor: ${this.autor}, Publicado em: ${this.dataPublicacao.toDateString()}`);
    }
}


const livro = new Livro("Teoria da Guerra Moderna", "Carl von Clausewitz", 600);
const revista=new Revista("teoria da Guerra Moderna","Daniel von",700);
const artigo = new Artigo("Teoria da Guerra Moderna", "Wiliam von", new Date("2025-04-03"));
livro.exibirdetalhe();
