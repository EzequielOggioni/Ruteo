import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './page/juegos/juegos.component';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'  },
  { path: 'login', component: LoginComponent },
  {
    path: 'juego', component: JuegosComponent, children: [
      { path: 'preguntado', component:PreguntadosComponent },
      { path: 'tateti', component: TatetiComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
