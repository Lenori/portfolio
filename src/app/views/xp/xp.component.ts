import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {

  titulo = 'E onde eu já';
  destaque = 'trabalhei?';
  text = 'Tenho uma vasta experiência em empresas de vários tamanhos e especialidades. Claro que nessa tela eu resumi para mostrar as empresas mais importantes, mas nesses vários anos de mercado eu adquiri experiência e expertise em várias áreas que podem contribuir para seu projeto. Será que a sua empresa é a próxima a aparecer aqui?';

  itens = [

    {id: 1, empresa: 'Fields 360', cargo: 'Diretor de Arte'},
    {id: 2, empresa: 'PIX Agência Digital', cargo: 'Diretor de Criação | Sócio'},
    {id: 3, empresa: 'Agência 7 Pontos', cargo: 'Diretor de Arte | Web Developer'},
    {id: 4, empresa: 'AFREI Agência Criativa', cargo: 'Diretor de Arte'},
    {id: 5, empresa: 'Vento Bravo', cargo: 'Diretor de Arte'},
    {id: 6, empresa: 'Agência Galo Canta', cargo: 'Diretor de Arte'},
    {id: 7, empresa: 'LinkBiz Agência Digital', cargo: 'Analista de Marketing Digital'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
