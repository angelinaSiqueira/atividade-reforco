import { MaterialLeitura } from "./MaterialLeitura";

export class Revista implements MaterialLeitura {
  constructor(
    public titulo: string,
    public autor: string,
    public edicao: number
  ) {}

  exibirDetalhe(): void {
    console.log(`📰 Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`);
  }
}
