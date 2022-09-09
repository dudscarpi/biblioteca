import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Emprestimo } from '../../homepage/models/emprestimo';


@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private readonly baseUrl: string = 'http://localhost:8080/biblioteca/emprestimos'
  
  atualizarEmprestimoSub$: BehaviorSubject<boolean> = new BehaviorSubject(true)

  emprestimo!: Emprestimo;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getEmprestimo(): Observable<Emprestimo[]> {
    const token = this.authService.recuperarToken()
    return this.http.get<Emprestimo[]>(this.baseUrl)
  }
  

  buscarEmprestimoPeloId(idEmprestimo: number){
    return this.http.get<Emprestimo>(`${this.baseUrl}/${idEmprestimo}`)
  }


  deleteAutor(emprestimo: Emprestimo): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${emprestimo.idEmprestimo}`)
    .pipe(
      tap((emprest) => {
        this.atualizarEmprestimoSub$.next(true)
      })
    )
  }

  salvarAutor(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(this.baseUrl, emprestimo)

  }

  atualizarAutor(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.put<Emprestimo>(`${this.baseUrl}/${emprestimo.idEmprestimo}`, emprestimo)
    .pipe(
      tap((emprest) => {
        this.atualizarEmprestimoSub$.next(true)
      })
    )
  }


}
