import { Artigo } from "./artigo";
import { Livro } from "./livro";
import { Revista } from "./revista";

const liv = new Livro("Diario de um banana", "David Goggins", 419);
const rev = new Revista("Vogue", "Jornal Nacional", 3);
const art = new Artigo("Lei Civil", "Governo", new Date("1981-08-12"));

liv.exibirDetalhes();
rev.exibirDetalhes();
art.exibirDetalhes();