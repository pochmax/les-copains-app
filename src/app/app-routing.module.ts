import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'men',
    pathMatch: 'full',
  },
  {
    path: 'men',
    loadChildren: () => import('./man/man.module').then((m) => m.ManModule),
  },
  {
    path: 'sport',
    redirectTo: 'sport',
    pathMatch: 'full',
  },
  {
    path: 'sports',
    loadChildren: () =>
      import('./sport/sport.module').then((m) => m.SportModule),
  },
  {
    path: 'woman',
    redirectTo: 'sport',
    pathMatch: 'full',
  },
  {
    path: 'women',
    loadChildren: () =>
      import('./woman/woman.module').then((m) => m.WomanModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
