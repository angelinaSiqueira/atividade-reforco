import { MaterialLeitura } from "./MaterialLeitura";
export class Revista implements MaterialLeitura {
    constructor(public titulo: string, public autor: string, public edicao: number) {}

    exibirDetalhes(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`);
    }
}
