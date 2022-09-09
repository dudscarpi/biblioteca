import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Livros } from '../../homepage/models/livros';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly baseUrl: string = 'http://localhost:8080/biblioteca/livros'
  
  atualizarLivrosSub$: BehaviorSubject<boolean> = new BehaviorSubject(true)

  Livros!: Livros;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getLivros(): Observable<Livros[]> {
    const token = this.authService.recuperarToken()
    return this.http.get<Livros[]>(this.baseUrl) 

  }
  

  buscarLivroPeloId(idLivro: number){
    return this.http.get<Livros>(`${this.baseUrl}/${idLivro}`)
  }


  deleteLivro(livros: Livros): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${livros.idLivro}`)
    .pipe(
      tap((livr) => {
        this.atualizarLivrosSub$.next(true)
      })
    )
  }

  salvarLivro(livros: Livros): Observable<Livros> {
    return this.http.post<Livros>(this.baseUrl, livros)

  }

  atualizarLivro(livros: Livros): Observable<Livros> {
    return this.http.put<Livros>(`${this.baseUrl}/${livros.idLivro}`, livros)
    .pipe(
      tap((livr) => {
        this.atualizarLivrosSub$.next(true)
      })
    )
  }


}
