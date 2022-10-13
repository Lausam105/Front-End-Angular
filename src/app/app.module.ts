import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { NotFoundComponentComponent } from './componentes/not-found-component/not-found-component.component';
import { SoftYSkComponent } from './componentes/soft-ysk/soft-ysk.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './servicios/interceptor.service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';


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
    IniciarSesionComponent,
    PortfolioComponent,
    NotFoundComponentComponent,
    SoftYSkComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    

    
  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
