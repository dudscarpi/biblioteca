import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Leitores } from '../../homepage/models/leitores';


@Injectable({
  providedIn: 'root'
})
export class LeitoresService {

  private readonly baseUrl: string = 'http://localhost:8080/biblioteca/leitores'
  
  atualizarLeitoresSub$: BehaviorSubject<boolean> = new BehaviorSubject(true)

  leitores!: Leitores;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getLeitores(): Observable<Leitores[]> {
    const token = this.authService.recuperarToken()
    return this.http.get<Leitores[]>(this.baseUrl)
  }
  

  buscarLeitoresPeloId(idLeitor: number){
    return this.http.get<Leitores>(`${this.baseUrl}/${idLeitor}`)
  }


  deleteAutor(leitores: Leitores): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${leitores.idLeitor}`)
    .pipe(
      tap((leit) => {
        this.atualizarLeitoresSub$.next(true)
      })
    )
  }

  salvarAutor(leitores: Leitores): Observable<Leitores> {
    return this.http.post<Leitores>(this.baseUrl, leitores)

  }

  atualizarAutor(leitores: Leitores): Observable<Leitores> {
    return this.http.put<Leitores>(`${this.baseUrl}/${leitores.idLeitor}`, leitores)
    .pipe(
      tap((leit) => {
        this.atualizarLeitoresSub$.next(true)
      })
    )
  }


}
