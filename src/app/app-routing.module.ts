import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//as
import { HomeComponent } from './components/home/home.component';
import { CadastroCategoriaComponent } from './components/cadastro/cadastro-categoria/cadastro-categoria.component';
import { CadastroFilmesComponent } from './components/cadastro/cadastro-filmes/cadastro-filmes.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cadastrarFilmes', component:CadastroFilmesComponent},
  {path: 'cadastrarCategoria', component:CadastroCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
