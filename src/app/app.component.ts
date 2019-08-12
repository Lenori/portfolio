import { Component, OnInit } from '@angular/core';
import { MouseDirective } from './mouse.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'lenori';
  animatedId = 1;
  sections: any;

  lang = '';

  mouseWheelUpFunc() {
    document.getElementById('container').scrollBy(-1900, 0);
    this.hideInfos(this.animatedId);
    if (this.animatedId !== 1) { this.animatedId--; }
    this.showInfos(this.animatedId);
  }

  mouseWheelDownFunc() {
    document.getElementById('container').scrollBy(1900, 0);
    this.hideInfos(this.animatedId);
    if (this.animatedId !== this.sections) { this.animatedId++; }
    this.showInfos(this.animatedId);
  }

  showInfos(id) {

    document.getElementById('container-0' + id).classList.toggle('is-visible');

  }

  hideInfos(id) {

    document.getElementById('container-0' + id).classList.remove('is-visible');

  }

  ngOnInit() {

    const url = window.location.href.split('?');
    this.lang = url.pop();

    this.showInfos(this.animatedId);
    this.sections = document.querySelectorAll('#container .sections').length;

  }

}
