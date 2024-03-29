import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { EditExperienciaComponent } from '../componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from '../componentes/experiencia/new-experiencia.component';
import { IniciarSesionComponent } from '../componentes/iniciar-sesion/iniciar-sesion.component';
import { NotFoundComponentComponent } from '../componentes/not-found-component/not-found-component.component';
import { PortfolioComponent } from '../componentes/portfolio/portfolio.component';
import { EditeducacionComponent } from '../componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from '../componentes/educacion/neweducacion.component';

const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'Iniciar-Sesion', component:IniciarSesionComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
     RouterModule
  ]
})
export class AppRoutingModule { }
