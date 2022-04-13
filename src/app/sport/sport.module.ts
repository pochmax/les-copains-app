import { SportService } from './services/sport.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-rooting.module';
import { SharedModule } from '../shared/shared.module';
import { SportComponent } from './sport.component';
import { SportListComponent } from './pages/sport-list/sport-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SportDetailsComponent } from './pages/sport-details/sport-details.component';
import { SportFormComponent } from './component/sport-form/sport-form.component';

@NgModule({
  declarations: [
    SportComponent,
    SportListComponent,
    SportDetailsComponent,
    SportFormComponent,
  ],
  imports: [CommonModule, SportRoutingModule, SharedModule, HttpClientModule],
  providers: [SportService],
})
export class SportModule {}
