import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {

  titulo = 'E o que eu já';
  destaque = 'ganhei?';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue odio ut nibh porta, sed dictum ipsum maximus. Mauris consectetur orci sit amet urna semper, quis pellentesque erat malesuada. Cras eget orci non neque consequat blandit. Nunc ut erat vel erat hendrerit scelerisque. Morbi sodales pellentesque dui eu venenatis.';

  itens = [

    {id: 1, premio: 'Profissionais de Publicidade do Ano', obs: '2018'},
    {id: 2, premio: 'Agência de Propaganda do Ano', obs: '2018'},
    {id: 3, premio: 'Prêmio Jorge Salim de Excelência Gráfica', obs: 'Esse eu fui só indicado mas gosto'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
