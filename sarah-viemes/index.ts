import { Livro } from "./Livro.ts";
import { Revista } from "./Revista.ts";
import { Artigo } from "./Artigo.ts";

const livro1 = new Livro("É assim que acaba", "Coollen Hoover", 1995);
const revista1 = new Revista("Superinteressante", "Editora Abril", 350);
const artigo1 = new Artigo("Teoria da Relatividade", "Albert Einstein", new Date("1905-11-21"));


livro1.exibirDetalhes();
revista1.exibirDetalhes();
artigo1.exibirDetalhes();