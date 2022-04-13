import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportDetailsComponent } from './pages/sport-details/sport-details.component';
import { SportListComponent } from './pages/sport-list/sport-list.component';
import { SportComponent } from './sport.component';

const routes: Routes = [
  {
    path: '',
    component: SportComponent,
    children: [
      {
        path: '',
        component: SportListComponent,
      },
      {
        path: ':id',
        component: SportDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportRoutingModule {}
