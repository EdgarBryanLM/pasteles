import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastelesComponent } from './pages/pasteles/pasteles.component';

const routes: Routes = [
  {
    path: 'pasteles',
    component: PastelesComponent
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
