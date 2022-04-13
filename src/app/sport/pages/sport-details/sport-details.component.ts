import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import ObjectID from 'bson-objectid';
import { Observable } from 'rxjs';
import { Sport } from 'src/app/core/models/sport';
import { SportFormData } from 'src/app/core/models/sportFormData';
import { SportFormComponent } from '../../component/sport-form/sport-form.component';
import { SportService } from '../../services/sport.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Schema, Types } from 'mongoose';

@Component({
  selector: 'app-sport-details',
  templateUrl: './sport-details.component.html',
  styleUrls: ['./sport-details.component.scss'],
})
export class SportDetailsComponent implements OnInit {
  sport$: Observable<Sport>;
  constructor(
    private _sportService: SportService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
    });
  }

  fetchData(id: string) {
    this.sport$ = this._sportService.getById(id);
  }

  updateSport(sport: Sport) {
    const sportFormData: SportFormData = {
      isUpdateMode: true,
      sportToUpdate: sport,
    };

    const dialogRef = this._dialog.open(SportFormComponent, {
      data: sportFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deleteSport(id: string) {
    this._sportService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/sports');
    });
  }

  goBack() {
    this._location.back();
  }
}
