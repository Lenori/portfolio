import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {

  @Input() lang: string;

  titulo = '';
  destaque = '';
  text = '';

  itens = [];

  constructor() { }

  ngOnInit() {

    if (this.lang === 'en') {

      this.titulo = 'What about my';
      this.destaque = 'experience?';
      this.text = 'I´ve worked in small, medium and big companies. This is a brief excerpt, but all this years working gave me experience and expertise in subjects that can be useful in your project. Maybe your company is the next one here?';

      this.itens = [

        {id: 1, empresa: 'Fields 360', cargo: 'Art Director'},
        {id: 2, empresa: 'PIX Agência Digital', cargo: 'Art Director | Partner'},
        {id: 3, empresa: 'Agência 7 Pontos', cargo: 'Art Director | Web Developer'},
        {id: 4, empresa: 'AFREI Agência Criativa', cargo: 'Art Director'},
        {id: 5, empresa: 'Vento Bravo', cargo: 'Art Director'},
        {id: 6, empresa: 'Agência Galo Canta', cargo: 'Art Director'},
        {id: 7, empresa: 'LinkBiz Agência Digital', cargo: 'Marketing Digital Analyst'}

      ];

    }

    else {

      this.titulo = 'E onde eu já';
      this.destaque = 'trabalhei?';
      this.text = 'Em empresas de vários tamanhos e especialidades. Aqui eu resumi para mostrar as mais importantes, mas nesses anos de mercado eu adquiri experiência e expertise em áreas que podem contribuir para seu projeto. Será que a sua empresa é a próxima a aparecer aqui?';

      this.itens = [

        {id: 1, empresa: 'Fields 360', cargo: 'Diretor de Arte'},
        {id: 2, empresa: 'PIX Agência Digital', cargo: 'Diretor de Criação | Sócio'},
        {id: 3, empresa: 'Agência 7 Pontos', cargo: 'Diretor de Arte | Web Developer'},
        {id: 4, empresa: 'AFREI Agência Criativa', cargo: 'Diretor de Arte'},
        {id: 5, empresa: 'Vento Bravo', cargo: 'Diretor de Arte'},
        {id: 6, empresa: 'Agência Galo Canta', cargo: 'Diretor de Arte'},
        {id: 7, empresa: 'LinkBiz Agência Digital', cargo: 'Analista de Marketing Digital'}

      ];

    }

  }

}
