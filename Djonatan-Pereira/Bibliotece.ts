interface MaterialLeitura{
    titulo:string;
    autor:string;
    exibirdetalhe():void;
}

class Livro implements MaterialLeitura{
    titulo: string;
    autor: string;
    numeroPaginas:number;
    
    constructor(titulo:string,autor:string,numeroPaginas:number){
          this.titulo = titulo;
          this.autor = autor;
          this.numeroPaginas = numeroPaginas;
    }
    exibirdetalhe(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.numeroPaginas}`);  
    }
}

class Revista implements MaterialLeitura{
    titulo: string;
    autor: string;
    exibirdetalhe(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`);
    }
    edicao:number;
    constructor(titulo:string,autor:string,edicao:number){
    this.titulo = titulo;
    this.autor = autor;
    this.edicao = edicao;
    }
}

class Artigo implements MaterialLeitura{
    titulo: string;
    autor: string;
    exibirdetalhe(): void {
        console.log(`Artigo: ${this.titulo}, Autor: ${this.autor}, Publicado em: ${this.dataPublicacao.toDateString()}`);
    }
    dataPublicacao:Date;
    constructor(titulo:string,autor:string,dataPublicacao:Date){
    this.titulo = titulo;
    this.autor = autor;
    this.dataPublicacao = dataPublicacao;
    }
}

const livro = new Livro("Dom Quixote", "Miguel de Cervantes", 500);
const revista = new Revista("National Geographic", "Vários Autores", 202);
const artigo = new Artigo("A Teoria da Relatividade", "Albert Einstein", new Date("1905-06-30"));

livro.exibirdetalhe();
revista.exibirdetalhe();
artigo.exibirdetalhe();

//npm init -y
//npm install
//npm install -g typescript
//tsc --init
//tsc --version
//npm install -g ts-node

//git ignore
//node-modules