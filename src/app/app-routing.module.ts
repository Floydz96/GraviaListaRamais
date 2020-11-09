import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RamaisCriarComponent } from './ramais/ramais-criar/ramais-criar.component';
import { RamaisComponent } from './ramais/ramais.component';


const routes: Routes = [{path: "", component: RamaisComponent}, {path: "filial/cadastrar", component: RamaisCriarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
