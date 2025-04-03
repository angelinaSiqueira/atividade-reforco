import { Livro } from "./Livro";
import { Revista } from "./Revista";
import { Artigo } from "./Artigo";

const A = new Livro("hamlet", "Shakespeare", 203);
A.exibirDetalhe();

const B = new Revista("Veja", "Indefinido", 2);
B.exibirDetalhe();

const C = new Artigo("Crise do cuidado" , "Nancy Fraser", new Date(2019,2,6));
C.exibirDetalhe();