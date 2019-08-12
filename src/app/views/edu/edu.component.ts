import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  @Input() lang: string;

  titulo = '';
  destaque = '';
  text = '';

  itens = [];

  constructor() { }

  ngOnInit() {

    if (this.lang === 'en') {

      this.titulo = 'What about';
      this.destaque = 'my skills?';
      this.text = 'My degree is in advertisement, but I have several extra classes and courses. Also, I´m used to learn things on my own such as english, french (oui oui) e metereology (for flying and curiosity purposes). Easy adapter, I can learn anything that may be needed in your project.';

      this.itens = [

        {id: 1, curso: 'Advertisement', escola: 'Uniprojeção Centro Universitário'},
        {id: 2, curso: 'Ad copywriting', escola: 'FUNYL Escola de Propaganda'},
        {id: 3, curso: 'Google Adwords & Search Expert', escola: 'Google Training Center'},
        {id: 4, curso: 'Design & Digital Arts', escola: 'Full Sail University Training Center'},
        {id: 5, curso: 'Web Marketing Expert', escola: 'Goobec Training Center'},
        {id: 6, curso: 'PHP Web Development', escola: 'TW Web Trainings'},
        {id: 7, curso: 'Angular, React & React Native', escola: 'TW Web Trainings'}

      ];

    }

    else {

      this.titulo = 'E o que eu já';
      this.destaque = 'estudei?';
      this.text = 'Sou formado em propaganda, e já fiz vários outros cursos e workshops à parte. E também sou muito acostumado a aprender coisas sozinho, tais quais inglês, francês (oui oui) e metereologia (sou eclético). Me adapto fácil a novos conteúdos, e tenho capacidade de aprender qualquer coisa que seja necessária para fazer o seu job.';

      this.itens = [

        {id: 1, curso: 'Publicidade e propaganda', escola: 'Uniprojeção Centro Universitário'},
        {id: 2, curso: 'Redação publicitária', escola: 'FUNYL Escola de Propaganda'},
        {id: 3, curso: 'Google Adwords & Search Expert', escola: 'Google Training Center'},
        {id: 4, curso: 'Design e Arte Digital', escola: 'Full Sail University Training Center'},
        {id: 5, curso: 'Web Marketing Expert', escola: 'Goobec Training Center'},
        {id: 6, curso: 'PHP Web Development', escola: 'TW Web Trainings'},
        {id: 7, curso: 'Angular, React & React Native', escola: 'TW Web Trainings'}

      ];

    }

  }

}
