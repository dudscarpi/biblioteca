import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Emprestimo } from '../homepage/models/emprestimo';
import { EmprestimoService } from '../services/emprestimo/emprestimo.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.css']
})
export class EmprestimosComponent implements OnInit {

  emprestimo: Emprestimo[] = []
  colunas: Array<string> = ['idEmprestimo', 'dataDevolucao', 'descricao', 'statusEmprestimo', 'leitores', 'livros']


  constructor(
    private titleService: Title,
    private emprestimoService: EmprestimoService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Emprestimos")

    this.emprestimoService.getEmprestimo().subscribe(
      (emprestimo) => {
        this.emprestimo = emprestimo
         console.log(emprestimo) 
      }
    )
  }

  getEmprestimo(): void{
    this.emprestimoService.getEmprestimo().subscribe(
      emprestimo => {
        this.emprestimo = emprestimo
         console.log(emprestimo) 
      }
    )
  }


  carregarLeitores() {
    this.emprestimoService.getEmprestimo().subscribe(
      (emprestimos) => {
        this.emprestimo = [];
        emprestimos = emprestimos;
        for (let emprestimo of emprestimos) {
          this.emprestimo.push(emprestimo);
          console.log(emprestimo)
        }
      }
    ) 
  }

  recuperarLeitores(): void {
    this.emprestimoService.getEmprestimo().subscribe(
      (empres) => {
        this.emprestimo = empres.reverse()
      },
      (erro) => {
        console.log(erro)
      },
      () => {
        console.log('Dados enviados com sucesso')
      }
    )
  }


}
