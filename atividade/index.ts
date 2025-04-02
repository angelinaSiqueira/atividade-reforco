import { Livro } from "./Livro";
import { Revista } from "./Revista";
import { Artigo } from "./Artigo";

console.log("Teste");

const livro = new Livro("As longas tranças de um careca", "Pablo Escobar", 300);
livro.exibirDetalhe();

const revista = new Revista("Vogue", "Rihanna", 5);
revista.exibirDetalhe();

let data = new Date();
const artigo = new Artigo("artigo 5 da constituição federal", "Lula", data);
artigo.exibirDetalhe();