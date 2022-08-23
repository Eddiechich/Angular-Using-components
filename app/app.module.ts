import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { InsideSecondComponent } from './inside-second/inside-second.component';
import { InsideThirdComponent } from './inside-third/inside-third.component';


@NgModule({
  declarations: [
    
    MainComponent,
    SecondComponent,
    ThirdComponent,
    InsideSecondComponent,
    InsideThirdComponent
  ],
  imports: [

    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
