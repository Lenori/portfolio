import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {

  @Input() lang: string;

  titulo = '';
  destaque = '';
  text = '';

  itens = [];

  constructor() { }

  ngOnInit() {

    if (this.lang === 'en') {

      this.titulo = 'What about';
      this.destaque = 'my prizes?';
      this.text = 'After years of experience doing all this amazing things, I was finally acknowledged and of course I will show you, future employer. There was a few collective prizes, individual prizes and prizes that I haven´t won... But don´t worry, I don´t cry about them at night (not anymore).';

      this.itens = [

        {id: 1, premio: 'Advertisement Professionals of the Year', obs: '2018'},
        {id: 2, premio: 'Ad Agency of the Year', obs: '2018'},
        {id: 3, premio: 'Jorge Salim´s Prize of Graphical Excellence', obs: 'This I just made it to the shortlist :('}

      ];

    }

    else {

      this.titulo = 'E o que eu já';
      this.destaque = 'ganhei?';
      this.text = 'E depois de anos de experiência fazendo esses trabalhos incríveis que você acabou de ver, finalmente fui reconhecido e é óbvio que vou mostrar aqui para você, futuro empregador. Foram alguns prêmios coletivos, individuais e prêmios que infelizmente não ganhei... Mas relaxa, não fico chorando de noite pensando neles (não mais).';

      this.itens = [

        {id: 1, premio: 'Profissionais de Publicidade do Ano', obs: '2018'},
        {id: 2, premio: 'Agência de Propaganda do Ano', obs: '2018'},
        {id: 3, premio: 'Prêmio Jorge Salim de Excelência Gráfica', obs: 'Esse eu fui só indicado mas gosto'}

      ];

    }

  }

}
