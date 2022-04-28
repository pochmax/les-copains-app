import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Man } from 'src/app/core/models/man';
import { ManFormData } from 'src/app/core/models/manFormData';
import { ManFormComponent } from '../../components/man-form/man-form.component';
import { ManService } from '../../services/man.service';
import { Location } from '@angular/common';
import { Types } from 'mongoose';
import ObjectID from 'bson-objectid';
@Component({
  selector: 'app-man-details',
  templateUrl: './man-details.component.html',
  styleUrls: ['./man-details.component.scss'],
})
export class ManDetailsComponent implements OnInit {
  man$: Observable<Man>;

  constructor(
    private _manService: ManService,
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
    this.man$ = this._manService.getById(id);
  }

  updateMan(man: Man) {
    const manFormData: ManFormData = {
      isUpdateMode: true,
      manToUpdate: man,
    };

    const dialogRef = this._dialog.open(ManFormComponent, {
      data: manFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deleteMan(id: ObjectID) {
    this._manService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/men');
    });
  }

  goBack() {
    this._location.back();
  }
}
