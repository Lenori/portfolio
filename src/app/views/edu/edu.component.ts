import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  titulo = 'E o que eu já';
  destaque = 'estudei?';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue odio ut nibh porta, sed dictum ipsum maximus. Mauris consectetur orci sit amet urna semper, quis pellentesque erat malesuada. Cras eget orci non neque consequat blandit. Nunc ut erat vel erat hendrerit scelerisque. Morbi sodales pellentesque dui eu venenatis.';

  itens = [

    {id: 1, curso: 'Publicidade e propaganda', escola: 'Uniprojeção Centro Universitário'},
    {id: 2, curso: 'Redação publicitária', escola: 'FUNYL Escola de Propaganda'},
    {id: 3, curso: 'Google Adwords & Search Expert', escola: 'Google Training Center'},
    {id: 4, curso: 'Design e Arte Digital', escola: 'Full Sail University Training Center'},
    {id: 5, curso: 'Web Marketing Expert', escola: 'Goobec Training Center'},
    {id: 6, curso: 'PHP Web Development', escola: 'TW Web Trainings'},
    {id: 7, curso: 'Angular, React & React Native', escola: 'TW Web Trainings'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
