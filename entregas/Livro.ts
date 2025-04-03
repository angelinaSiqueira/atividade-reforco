class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;
  
    constructor(titulo: string, autor: string, numeroPagina: number) {
      this.titulo = titulo;
      this.autor = autor;
      this.numeroPagina = numeroPagina;
    }
  
    exibirDetalhes(): void {
      console.log(`Livro: ${this.titulo}\nAutor: ${this.autor}\nPáginas: ${this.numeroPagina}`);
    }
  }
  