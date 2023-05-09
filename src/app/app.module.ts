import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormeComponent } from './forme/forme.component';
import { EditformeComponent } from './editforme/editforme.component';

@NgModule({
  declarations: [
    AppComponent,
    FormeComponent,
    EditformeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
