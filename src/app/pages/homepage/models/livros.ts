import { Autores } from "./autores"

export interface Livros {
    idLivro?: number
    foto: string
    resumo: string
    status: string
    titulo: string
    autores: Autores
}