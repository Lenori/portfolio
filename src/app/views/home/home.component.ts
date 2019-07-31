import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo = 'Olá! Meu nome é';
  destaque = 'Leo Lenori.';
  text = 'Sou um diretor de arte (e criação!) que escreve sobre cinema, pilota aviões e desenvolve em PHP (e Angular, React, bla bla bla). Já assinei peças importantes e legais para o MPF, a 99 POP e o Aeroporto de Brasília. O show em Paris que eu fiz a direção visual conta como experiência internacional? Acho que sim.';

  constructor() { }

  ngOnInit() {}

}
