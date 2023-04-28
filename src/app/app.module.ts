import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { AberturaComponent } from './component/abertura/abertura.component';
import { MaterialDidaticoComponent } from './component/material-didatico/material-didatico.component';
import { VerTodosComponent } from './component/ver-todos/ver-todos.component';
import { VideoAulasComponent } from './component/video-aulas/video-aulas.component';
import { HeaderPerComponent } from './component/header-per/header-per.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AberturaComponent,
    MaterialDidaticoComponent,
    VerTodosComponent,
    VideoAulasComponent,
    HeaderPerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
