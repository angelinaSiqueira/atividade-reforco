import { Livro } from "./Livro";
import { Revista } from "./Revista";
import { Artigo } from "./Artigo";

const a = new Livro("hamlet", "Shakespeare", 203);
a.exibirDetalhe;

const b = new Revista("Veja", "Indefinido", 2);
b.exibirDetalhe;

const c = new Artigo("Crise do cuidado" , "Nancy Fraser", new Date(2019,2,6));
c.exibirDetalhe;