import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Livros } from 'src/app/pages/homepage/models/livros';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  livros: Livros[] = []
  allLivros: Livros[] = []

  value = '';
  emailUsuario!: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.emailUsuario = this.email()
  }

  email():string {
    const email = this.authService.email().sub
    return email
  }
  
  logout() {
    this.authService.signOut()
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const formataStr = (a: string) => a.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    this.livros = this.allLivros.filter( livr => {
      return formataStr(livr.titulo).includes(formataStr(value));
    })
  }

  checker(arr: string[], target: string[]): boolean {
    return target.every(v => arr.includes(v))
  };
  
}