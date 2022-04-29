import { TypeVisitor } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isEmpty, Observable } from 'rxjs';
import { Woman } from 'src/app/core/models/woman';
import { WomanFormData } from 'src/app/core/models/womanFormData';
import { WomanService } from '../../services/woman.service';
import { Types } from 'mongoose';
import ObjectID from 'bson-objectid';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Sport {
  _id: Types.ObjectId;
}

@Component({
  selector: 'app-woman-form',
  templateUrl: './woman-form.component.html',
  styleUrls: ['./woman-form.component.scss'],
})
export class WomanFormComponent implements OnInit {
  isUpdateMode: boolean;
  womanForm: FormGroup;

  situations: string[] = ['En couple', 'Célibataire'];
  // girlfriends: string[] = ['624ecbfe7598c2e41b1ba534'];
  // sports: string[] = ['624db50cee3b0ced35aaca4d'];
  constructor(
    private _formBuilder: FormBuilder,
    private _womanService: WomanService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<WomanFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WomanFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  sports: Sport[] = [];
  // woman: Woman[] = [];

  add(event: MatChipInputEvent): void {
    const value = event.value;

    // Add our fruit
    if (value) {
      this.sports.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
    console.log(this.sports);
  }

  remove(sport: Sport): void {
    const index = this.sports.indexOf(sport);

    if (index >= 0) {
      this.sports.splice(index, 1);
    }
  }

  initFormBuilder() {
    this.womanForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.womanToUpdate.id
          : new Types.ObjectId(),
        // Validators.required,
      ],
      firstName: [
        this.data.isUpdateMode ? this.data.womanToUpdate.firstName : '',
        // Validators.required,
      ],
      lastName: [
        this.data.isUpdateMode ? this.data.womanToUpdate.lastName : '',
        // Validators.required,
      ],
      situation: [
        this.data.isUpdateMode ? this.data.womanToUpdate.situation : '',
        // Validators.required,
      ],
      dateOfBirth: [
        this.data.isUpdateMode ? this.data.womanToUpdate.dateOfBirth : '',
        // Validators.required,
      ],

      boyfriend: [
        this.data.isUpdateMode
          ? this.data.womanToUpdate.boyfriend
          : new Types.ObjectId(),
        // Validators.required,
      ],

      photo: [
        this.data.isUpdateMode ? this.data.womanToUpdate.photo : '',
        // Validators.required,
      ],
      sport: [
        this.data.isUpdateMode ? this.sports : this.sports,
        // Validators.required,
      ],
    });
  }

  closeForm(id?: ObjectID) {
    this.womanForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(woman: Woman) {
    if (this.womanForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._womanService.update(woman).subscribe((response) => {
          this.closeForm(woman.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._womanService.create(woman).subscribe((response) => {
          this.closeForm(woman.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}
