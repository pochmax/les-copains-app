import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Woman } from 'src/app/core/models/woman';
import { WomanFormData } from 'src/app/core/models/womanFormData';
import { WomanFormComponent } from '../../components/woman-form/woman-form.component';
import { WomanService } from '../../services/woman.service';
import { Location } from '@angular/common';
import { Types } from 'mongoose';
import ObjectID from 'bson-objectid';
@Component({
  selector: 'app-woman-details',
  templateUrl: './woman-details.component.html',
  styleUrls: ['./woman-details.component.scss'],
})
export class WomanDetailsComponent implements OnInit {
  woman$: Observable<Woman>;

  constructor(
    private _womanService: WomanService,
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

  fetchData(id: ObjectID) {
    this.woman$ = this._womanService.getById(id);
  }

  updateWoman(woman: Woman) {
    const womanFormData: WomanFormData = {
      isUpdateMode: true,
      womanToUpdate: woman,
    };

    const dialogRef = this._dialog.open(WomanFormComponent, {
      data: womanFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deleteWoman(id: ObjectID) {
    this._womanService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/women');
    });
  }

  goBack() {
    this._location.back();
  }
}
