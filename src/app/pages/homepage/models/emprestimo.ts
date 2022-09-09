import { Leitores } from "./leitores"
import { Livros } from "./livros"

export interface Emprestimo {
    idEmprestimo?: number
    dataDevolucao?: Date
    descricao:string
    leitores: Leitores
    livros: Livros
}