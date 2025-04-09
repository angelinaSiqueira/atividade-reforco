import { Artigo } from "./Artigo";
import { Livros } from "./Livro";
import { MaterialLeitura } from "./material-leitura";
import { Revista } from "./Revista";

const R = new Revista ('teste' , 'teste' , 5);
R.exibirDetalhe
const L = new Livros ('teste' , 'teste', 100 );
L.exibirDetalhe
const A = new Artigo ('teste', 'teste',new Date(2025, 11, 25));
A.exibirDetalhe