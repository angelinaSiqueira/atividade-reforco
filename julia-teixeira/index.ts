import { Livro } from "./Livro";
import { Revista } from "./Revista";
import { Artigo } from "./Artigo";

const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1178);
const revista = new Revista("National Geographic", "Vários Autores", 340);
const artigo = new Artigo("Machine Learning", "Andrew Ng", new Date(2021, 5, 15));

livro.exibirDetalhe();
revista.exibirDetalhe();
artigo.exibirDetalhe();
