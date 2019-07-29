import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MouseDirective} from './mouse.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
