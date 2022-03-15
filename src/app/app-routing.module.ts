import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { PastelesComponent } from './pages/pasteles/pasteles.component';

const routes: Routes = [
  {
    path: 'pasteles',
    component: PastelesComponent
  },
  {
    path: 'comprar',
    component: ComprarComponent
  },
  {
    path: 'administrador',
    component: AdminComponent
  },
  {
    path: '**',
    redirectTo: 'pasteles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
