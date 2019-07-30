import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  titulo = 'E o que eu já';
  destaque = 'fiz?';

  itens = [

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

  vejaMais = 'behance.net/Lenori';

  constructor() { }

  ngOnInit() {
  }

}
