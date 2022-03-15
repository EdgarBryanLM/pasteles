import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastelesComponent } from './pages/pasteles/pasteles.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { CarruselPastelesComponent } from './components/carrusel-pasteles/carrusel-pasteles.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { AvatarModule } from "primeng/avatar";
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './components/contacto/contacto.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AdminComponent } from './pages/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PastelesComponent,
    MenuComponent,
    CarruselComponent,
    ComprarComponent,
    CarruselPastelesComponent,
    OpinionesComponent,
    ContactoComponent,
    AdminComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    AvatarModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
