import { Sport } from 'src/app/core/models/sport';
import { Observable } from 'rxjs';
import { SportService } from '../../services/sport.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SportFormData } from 'src/app/core/models/sportFormData';
import { SportFormComponent } from '../../component/sport-form/sport-form.component';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss'],
})
export class SportListComponent implements OnInit {
  sports$: Observable<Sport[]>;
  displayedColumns: string[] = ['name', 'desc'];

  constructor(
    private _sportService: SportService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.sports$ = this._sportService.get();
  }

  showSportDetails(sport: Sport) {
    this._router.navigateByUrl('/sports/' + sport.id);
  }

  createSport() {
    const sportFormData: SportFormData = {
      isUpdateMode: false,
    };

    const dialogRef = this._dialog.open(SportFormComponent, {
      data: sportFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }
}
