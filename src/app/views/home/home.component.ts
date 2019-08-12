import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() lang: string;

  titulo = '';
  destaque = '';
  text = '';

  constructor() { }

  ngOnInit() {

    if (this.lang === 'en') {

      this.titulo = 'Hi! My name is';
      this.destaque = 'Leo Lenori.';
      this.text = 'Art (and creative!) director that writes about movies, fly planes and develops in PHP (and Angular, React, bla bla bla). Already made important and cool things for government servives, 99 POP and Brasília´s airport. The Paris show that I´ve made the visuals count as international experience? I guess so.';

    }

    else {

      this.titulo = 'Olá! Meu nome é';
      this.destaque = 'Leo Lenori.';
      this.text = 'Sou um diretor de arte (e criação!) que escreve sobre cinema, pilota aviões e desenvolve em PHP (e Angular, React, bla bla bla). Já assinei peças importantes e legais para o MPF, a 99 POP e o Aeroporto de Brasília. O show em Paris que eu fiz a direção visual conta como experiência internacional? Acho que sim.';

    }

  }

}
