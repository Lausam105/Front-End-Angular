import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { IniciarSesionComponent } from '../componentes/iniciar-sesion/iniciar-sesion.component';
import { NotFoundComponentComponent } from '../componentes/not-found-component/not-found-component.component';
import { PortfolioComponent } from '../componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'Iniciar-Sesion', component:IniciarSesionComponent},
  {path:'**', component:NotFoundComponentComponent}
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
