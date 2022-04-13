import { TypeVisitor } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Man } from 'src/app/core/models/man';
import { ManFormData } from 'src/app/core/models/manFormData';
import { ManService } from '../../services/man.service';
import { Types } from 'mongoose';
import ObjectID from 'bson-objectid';

@Component({
  selector: 'app-man-form',
  templateUrl: './man-form.component.html',
  styleUrls: ['./man-form.component.scss'],
})
export class ManFormComponent implements OnInit {
  isUpdateMode: boolean;
  manForm: FormGroup;

  situations: string[] = ['En couple', 'Célibataire'];
  girlfriends: string[] = ['624ecbfe7598c2e41b1ba534'];
  sports: string[] = ['624db50cee3b0ced35aaca4d'];
  constructor(
    private _formBuilder: FormBuilder,
    private _manService: ManService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ManFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ManFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.manForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.manToUpdate.id
          : new Types.ObjectId(),
        // Validators.required,
      ],
      firstName: [
        this.data.isUpdateMode ? this.data.manToUpdate.firstName : '',
        // Validators.required,
      ],
      lastName: [
        this.data.isUpdateMode ? this.data.manToUpdate.lastName : '',
        // Validators.required,
      ],
      situation: [
        this.data.isUpdateMode ? this.data.manToUpdate.situation : '',
        // Validators.required,
      ],
      dateOfBirth: [
        this.data.isUpdateMode ? this.data.manToUpdate.dateOfBirth : '',
        // Validators.required,
      ],
      girlfriend: [
        this.data.isUpdateMode
          ? this.data.manToUpdate.girlfriend
          : Types.ObjectId,
        // Validators.required,
      ],
      photo: [
        this.data.isUpdateMode ? this.data.manToUpdate.photo : '',
        // Validators.required,
      ],
      sport: [
        this.data.isUpdateMode ? this.data.manToUpdate.sport : '',
        // Validators.required,
      ],
    });
  }

  closeForm(id?: string) {
    this.manForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(man: Man) {
    if (this.manForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._manService.update(man).subscribe((response) => {
          this.closeForm(man.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._manService.create(man).subscribe((response) => {
          this.closeForm(man.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}