import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManComponent } from './man.component';
import { ManListComponent } from './pages/man-list/man-list.component';
import { ManDetailsComponent } from './pages/man-details/man-details.component';
import { ManFormComponent } from './components/man-form/man-form.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ManRoutingModule } from './man-rooting.module';
import { ManService } from './services/man.service';
import { SportModule } from '../sport/sport.module';
import { SportService } from '../sport/services/sport.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ManComponent,
    ManListComponent,
    ManDetailsComponent,
    ManFormComponent,
  ],
  imports: [
    CommonModule,
    ManRoutingModule,
    SharedModule,
    HttpClientModule,
    SportModule,

    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    ManService,
    SportService,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class ManModule {}
