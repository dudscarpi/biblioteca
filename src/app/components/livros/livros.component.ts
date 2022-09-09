import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Livros } from 'src/app/pages/homepage/models/livros';



@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros!: Livros


  constructor(
    private titleService: Title,
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle("Lista de Livros")
  }

 
}