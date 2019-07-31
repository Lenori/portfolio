import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {

  titulo = 'E o que eu já';
  destaque = 'ganhei?';
  text = 'E depois de anos de experiência fazendo esses trabalhos incríveis que você acabou de ver, finalmente fui reconhecido e é óbvio que vou mostrar aqui para você, futuro empregador. Foram alguns prêmios coletivos, individuais e prêmios que infelizmente não ganhei... Mas relaxa, não fico chorando de noite pensando neles (não mais).';

  itens = [

    {id: 1, premio: 'Profissionais de Publicidade do Ano', obs: '2018'},
    {id: 2, premio: 'Agência de Propaganda do Ano', obs: '2018'},
    {id: 3, premio: 'Prêmio Jorge Salim de Excelência Gráfica', obs: 'Esse eu fui só indicado mas gosto'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
