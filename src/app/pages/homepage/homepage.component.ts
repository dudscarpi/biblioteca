import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { LivrosComponent } from 'src/app/components/livros/livros.component';
import { LivrosService } from '../services/livros/livros.service';
import { Livros } from './models/livros';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  
  livros: Livros[] = []

  imagePreview: string = ''
  foto!: File
  desabilitar: boolean = true
  naoEncontrado: boolean = false

  constructor(
    private titleService: Title,
    private livrosService: LivrosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Home")

      this.livrosService.getLivros().subscribe(
        (livros) => {
          this.livros = livros
           console.log(livros) 
        }
      )
  }


  openDialog() {
    const dialogRef = this.dialog.open(LivrosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  getLivros(): void{
    this.livrosService.getLivros().subscribe(
      livros => {
        this.livros = livros
         console.log(livros) 
      }
    )
  }


  carregarLivros() {
    this.livrosService.getLivros().subscribe(
      (livros) => {
        this.livros = [];
        livros = livros;
        for (let livro of livros) {
          this.livros.push(livro);
          console.log(livro)
        }
      }
    ) 
  }

  recuperarLivros(): void {
    this.livrosService.getLivros().subscribe(
      (livr) => {
        this.livros = livr.reverse()
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