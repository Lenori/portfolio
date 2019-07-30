import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  titulo = 'Agora me';
  destaque = 'contrate!';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue odio ut nibh porta, sed dictum ipsum maximus. Mauris consectetur orci sit amet urna semper, quis pellentesque erat malesuada. Cras eget orci non neque consequat blandit. Nunc ut erat vel erat hendrerit scelerisque. Morbi sodales pellentesque dui eu venenatis.';

  itens = [

    {id: 1, img: 'fab fa-behance', link: 'http://behance.net/Lenori', titulo: 'Behance'},
    {id: 2, img: 'fas fa-at', link: 'mailto:leolenori@gmail.com', titulo: 'E-mail'},
    {id: 3, img: 'fab fa-instagram', link: 'http://www.instagram.com/leolenori', titulo: 'Instagram'},
    {id: 4, img: 'far fa-file-pdf', link: 'assets/cv-leo-lenori-web.pdf', titulo: 'Currículo'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
