import { Livros } from "./livros"

export interface Leitores {
    idLeitor?: number
    email: string
    nome: string
    statusLeitor:string
    livros: Livros
}