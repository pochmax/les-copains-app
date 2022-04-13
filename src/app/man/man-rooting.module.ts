import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManComponent } from './man.component';
import { ManDetailsComponent } from './pages/man-details/man-details.component';
import { ManListComponent } from './pages/man-list/man-list.component';

const routes: Routes = [
  {
    path: '',
    component: ManComponent,
    children: [
      {
        path: '',
        component: ManListComponent,
      },
      {
        path: ':id',
        component: ManDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManRoutingModule {}
