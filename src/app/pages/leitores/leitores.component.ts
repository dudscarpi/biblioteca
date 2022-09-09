import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Leitores } from '../homepage/models/leitores';
import { LeitoresService } from '../services/leitores/leitores.service';

@Component({
  selector: 'app-leitores',
  templateUrl: './leitores.component.html',
  styleUrls: ['./leitores.component.css']
})
export class LeitoresComponent implements OnInit {

  leitores: Leitores[] = []

  colunas: Array<string> = ['idLeitor', 'email', 'nome', 'statusLeitor', 'livros']


  imagePreview: string = ''
  foto!: File

  constructor(
    private titleService: Title,
    private leitoresService: LeitoresService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Leitores")

    this.leitoresService.getLeitores().subscribe(
      (leitores) => {
        this.leitores = leitores
         console.log(leitores) 
      }
    )
  }


  getLeitores(): void{
    this.leitoresService.getLeitores().subscribe(
      leitores => {
        this.leitores = leitores
         console.log(leitores) 
      }
    )
  }


  carregarLeitores() {
    this.leitoresService.getLeitores().subscribe(
      (leitores) => {
        this.leitores = [];
        leitores = leitores;
        for (let leitor of leitores) {
          this.leitores.push(leitor);
          console.log(leitores)
        }
      }
    ) 
  }

  recuperarLeitores(): void {
    this.leitoresService.getLeitores().subscribe(
      (leit) => {
        this.leitores = leit.reverse()
      },
      (erro) => {
        console.log(erro)
      },
      () => {
        console.log('Dados enviados com sucesso')
      }
    )
  }

  recuperarFoto(event: any): void {
    this.foto = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(this.foto)
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
  }


}
