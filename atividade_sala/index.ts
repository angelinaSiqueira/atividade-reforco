import { Artigo } from "./Artigo";
import { Livro } from "./Livro";
import { Revista } from "./Revista";

// Cadastro de livros, artigos e revistas
const livroEuRobo = new Livro("Eu robo", "Isaac Asimov", 200);
livroEuRobo.cadastrarLivro();

//livro a mais para teste de exibição
const livroNitesBrancas = new Livro("Noites brancas", "Dostoievski", 150)

const artigoInfo = new Artigo("Info", "Nogueira", new Date("2025-04-02"))
artigoInfo.cadastrarArtigo();

const RevistaForbes = new Revista("Forbes", "Eduardo Moreira", 45);
RevistaForbes.cadastrarRevista();

livroEuRobo.exibirDetalhe("Eu robo");
artigoInfo.exibirDetalhe("Info");
RevistaForbes.exibirDetalhe("Forbes");
