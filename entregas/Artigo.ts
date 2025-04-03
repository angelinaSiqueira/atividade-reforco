import { MaterialLeitura } from './MaterialLeitura';

export class Artigo implements MaterialLeitura {
  constructor(
    public titulo: string,
    public autor: string,
    public dataPublicacao: Date
  ) {}

  exibirDetalhes(): void {
    console.log(`Artigo: ${this.titulo}, Autor: ${this.autor}, Publicado em: ${this.dataPublicacao.toDateString()}`);
  }
}