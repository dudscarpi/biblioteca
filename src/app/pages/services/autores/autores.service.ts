import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Autores } from '../../homepage/models/autores';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private readonly baseUrl: string = 'http://localhost:8080/biblioteca/autores'
  
  atualizarAutoresSub$: BehaviorSubject<boolean> = new BehaviorSubject(true)

  Autores!: Autores;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAutores(): Observable<Autores[]> {
    const token = this.authService.recuperarToken()
    return this.http.get<Autores[]>(this.baseUrl)
  }
  

  buscarAutorPeloId(idAutor: number){
    return this.http.get<Autores>(`${this.baseUrl}/${idAutor}`)
  }


  deleteAutor(autores: Autores): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${autores.idAutor}`)
    .pipe(
      tap((aut) => {
        this.atualizarAutoresSub$.next(true)
      })
    )
  }

  salvarAutor(autores: Autores): Observable<Autores> {
    return this.http.post<Autores>(this.baseUrl, autores)

  }

  atualizarAutor(autores: Autores): Observable<Autores> {
    return this.http.put<Autores>(`${this.baseUrl}/${autores.idAutor}`, autores)
    .pipe(
      tap((aut) => {
        this.atualizarAutoresSub$.next(true)
      })
    )
  }


}
