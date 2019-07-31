import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  titulo = 'Agora me';
  destaque = 'contrate!';
  text = 'Já está convencido que sou a pessoa certa para o seu projeto? Bom! Agora pode vir falar comigo. Fique à vontade para mandar um e-email sem compromisso algum, ou uma DM no Instagram se você quiser um papo mais direto. Se quiser, pode fazer o download do meu CV para mostrar pro seu gerente de projetos e convencer ele também!';

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
