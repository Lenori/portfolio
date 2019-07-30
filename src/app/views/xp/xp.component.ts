import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {

  titulo = 'E onde eu já';
  destaque = 'trabalhei?';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue odio ut nibh porta, sed dictum ipsum maximus. Mauris consectetur orci sit amet urna semper, quis pellentesque erat malesuada. Cras eget orci non neque consequat blandit. Nunc ut erat vel erat hendrerit scelerisque. Morbi sodales pellentesque dui eu venenatis.';

  itens = [

    {id: 1, empresa: 'Fields 360', cargo: 'Diretor de Arte'},
    {id: 2, empresa: 'PIX Agência Digital', cargo: 'Diretor de Criação | Sócio'},
    {id: 3, empresa: 'Agência 7 Pontos', cargo: 'Diretor de Arte | Web Developer'},
    {id: 4, empresa: 'AFREI Agência Criativa', cargo: 'Diretor de Arte'},
    {id: 5, empresa: 'Vento Bravo', cargo: 'Diretor de Arte'},
    {id: 6, empresa: 'Agência Galo Canta', cargo: 'Diretor de Arte'},
    {id: 7, empresa: 'LinkBiz Agência Digital', cargo: 'Diretor de Arte'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
