import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomanComponent } from './woman.component';
import { WomanDetailsComponent } from './pages/woman-details/woman-details.component';
import { WomanListComponent } from './pages/woman-list/woman-list.component';

const routes: Routes = [
  {
    path: '',
    component: WomanComponent,
    children: [
      {
        path: '',
        component: WomanListComponent,
      },
      {
        path: ':id',
        component: WomanDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomanRoutingModule {}
