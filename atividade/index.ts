import {Livro} from "./Livro";
import {Revista} from "./Revista";
import {Artigo} from "./Artigo";

console.log("Teste");

let livro = new Livro("O príncipe", "Ludmilla", 455);
livro.exibirDetalhe();

let revista = new Revista("Porús", "Vin Diesel", 12);
revista.exibirDetalhe();

let artigo = new Artigo("A evolução das celulas pluricelulares", "Gregor Mendel", new Date);
artigo.exibirDetalhe();