import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo = 'Olá! Meu nome é';
  destaque = 'Leo Lenori.';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue odio ut nibh porta, sed dictum ipsum maximus. Mauris consectetur orci sit amet urna semper, quis pellentesque erat malesuada. Cras eget orci non neque consequat blandit. Nunc ut erat vel erat hendrerit scelerisque. Morbi sodales pellentesque dui eu venenatis.';

  constructor() { }

  ngOnInit() {}

}
