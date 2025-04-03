class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;
  
    constructor(titulo: string, autor: string, dataPublicacao: Date) {
      this.titulo = titulo;
      this.autor = autor;
      this.dataPublicacao = dataPublicacao;
    }
  
    exibirDetalhes(): void {
      console.log(`Artigo: ${this.titulo}\nAutor: ${this.autor}\nData de Publicação: ${this.dataPublicacao.toDateString()}`);
    }
  }
  