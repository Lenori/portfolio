import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MouseDirective} from './mouse.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { XpComponent } from './views/xp/xp.component';
import { EduComponent } from './views/edu/edu.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { PrizesComponent } from './views/prizes/prizes.component';
import { ContatoComponent } from './views/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseDirective,
    HomeComponent,
    XpComponent,
    EduComponent,
    JobsComponent,
    PrizesComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
