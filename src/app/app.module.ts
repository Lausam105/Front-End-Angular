import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { BarraDeNavegacionComponent } from './componentes/barra-de-navegacion/barra-de-navegacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { MisHabilidadesComponent } from './componentes/mis-habilidades/mis-habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BarraDeNavegacionComponent,
    EducacionComponent,
    ExperienciaComponent,
    MisHabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    
  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
