import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @Input() lang: string;

  titulo = '';
  destaque = '!';
  text = '';

  itens = [];

  constructor() { }

  ngOnInit() {

    if (this.lang === 'en') {

      this.titulo = 'Now';
      this.destaque = 'hire me!';
      this.text = 'Already sure that I´m the right person for your project? Good! Now come and talk to me. Feel free to send me an e-mail or a Instagram DM if you want something more direct. If you want, you can download my resume and show it to your project manager and convince him as well!';

      this.itens = [

        {id: 1, img: 'fab fa-behance', link: 'http://behance.net/Lenori', titulo: 'Behance'},
        {id: 2, img: 'fas fa-at', link: 'mailto:leolenori@gmail.com', titulo: 'E-mail'},
        {id: 3, img: 'fab fa-instagram', link: 'http://www.instagram.com/leolenori', titulo: 'Instagram'},
        {id: 4, img: 'far fa-file-pdf', link: 'assets/cv-leo-lenori-web.pdf', titulo: 'Resume (still in portuguese)'}

      ];

    }

    else {

      this.titulo = 'Agora me';
      this.destaque = 'contrate!';
      this.text = 'Já está convencido que sou a pessoa certa para o seu projeto? Bom! Agora pode vir falar comigo. Fique à vontade para mandar um e-email sem compromisso algum, ou uma DM no Instagram se você quiser um papo mais direto. Se quiser, pode fazer o download do meu CV para mostrar pro seu gerente de projetos e convencer ele também!';

      this.itens = [

        {id: 1, img: 'fab fa-behance', link: 'http://behance.net/Lenori', titulo: 'Behance'},
        {id: 2, img: 'fas fa-at', link: 'mailto:leolenori@gmail.com', titulo: 'E-mail'},
        {id: 3, img: 'fab fa-instagram', link: 'http://www.instagram.com/leolenori', titulo: 'Instagram'},
        {id: 4, img: 'far fa-file-pdf', link: 'assets/cv-leo-lenori-web.pdf', titulo: 'Currículo'}

      ];

    }

  }

}
