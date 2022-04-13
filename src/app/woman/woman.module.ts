import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomanComponent } from './woman.component';
import { WomanListComponent } from './pages/woman-list/woman-list.component';
import { WomanDetailsComponent } from './pages/woman-details/woman-details.component';
import { WomanFormComponent } from './components/woman-form/woman-form.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { WomanRoutingModule } from './woman-rooting.module';
import { WomanService } from './services/woman.service';
import { SportModule } from '../sport/sport.module';
import { SportService } from '../sport/services/sport.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    WomanComponent,
    WomanListComponent,
    WomanDetailsComponent,
    WomanFormComponent,
  ],
  imports: [
    CommonModule,
    WomanRoutingModule,
    SharedModule,
    HttpClientModule,
    SportModule,

    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    WomanService,
    SportService,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class WomanModule {}
