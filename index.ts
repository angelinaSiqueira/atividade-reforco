import { Livro } from "./Livro";
import { Revista} from "./Revista";
import { Artigo } from "./Artigo";



console.log("Teste")

const livro = new Livro("quarto de despejo", "carolina", 300)
livro.ExibirDetalhe();

const revista = new Revista( "memoria postumas", "assis", 250)
revista.ExibirDetalhe();

const artigo = new Artigo( "cortiço", "Aluizo", 21/09/67)
artigo.ExibirDetalhe();