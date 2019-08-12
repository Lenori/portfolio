import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @Input() lang: string;

  titulo = '';
  destaque = '';

  itens = [];

  vejaMais = 'behance.net/Lenori';

  constructor() { }

  ngOnInit() {

    if (this.lang === 'en') {

      this.titulo = 'And what have I';
      this.destaque = 'done?';

      this.itens = [

        {
          id: 1,
          titulo: 'Brasília´s Airport',
          desc: 'New institutional brochure for Brasília´s Airport, since the graphical project all the way to the production.',
          link: 'https://www.behance.net/gallery/64901795/Aeroporto-de-Brasilia-BOOK-INSTITUCIONAL'},

        {
          id: 2,
          titulo: '99 POP',
          desc: '99 POP´s campaign for Brasília´s aniversary, with website development, print ads and landing pages.',
          link: 'https://www.behance.net/gallery/64901657/99-POP-Landing'},

        {
          id: 3,
          titulo: 'Ministério da Saúde',
          desc: 'National campaign against STDs, with landing pages, print and digital ads.',
          link: 'http://www.sifilisnao.com.br'},

        {
          id: 4,
          titulo: 'BAND',
          desc: 'Development of a new project for BAND TV, with print and digital ads broadcasting the new annual sports event.',
          link: 'https://www.behance.net/gallery/64901447/Band-MOVIMENTE-SE'}

      ];

    }

    else {

      this.titulo = 'E o que eu já';
      this.destaque = 'fiz?';

      this.itens = [

        {
          id: 1,
          titulo: 'Aeroporto de Brasília',
          desc: 'Criação de um novo book institucional para o Aeroporto de Brasília, desde o projeto gráfico até a impressão.',
          link: 'https://www.behance.net/gallery/64901795/Aeroporto-de-Brasilia-BOOK-INSTITUCIONAL'},

        {
          id: 2,
          titulo: '99 POP',
          desc: 'Campanha de aniversário de Brasília para a 99 POP, com criação de layout para websites, anúncios impressos e desenvolvimento de landing pages.',
          link: 'https://www.behance.net/gallery/64901657/99-POP-Landing'},

        {
          id: 3,
          titulo: 'Ministério da Saúde',
          desc: 'Campanha nacinal de conscientização sobre a Sífilis, com criação de landing pages, anúncios impressos e digitais.',
          link: 'http://www.sifilisnao.com.br'},

        {
          id: 4,
          titulo: 'BAND',
          desc: 'Criação de novo produto para a BAND, com anúncios impressos e digitais divulgando o novo evento anual de esportes ao ar livre.',
          link: 'https://www.behance.net/gallery/64901447/Band-MOVIMENTE-SE'}

      ];

    }

  }

}
