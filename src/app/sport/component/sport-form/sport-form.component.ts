import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SportService } from '../../services/sport.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SportFormData } from 'src/app/core/models/sportFormData';
import { Sport } from 'src/app/core/models/sport';
import ObjectID from 'bson-objectid';
import { TypeVisitor } from '@angular/compiler';
import { Schema, Types } from 'mongoose';
import { StringifyOptions } from 'querystring';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import { Man } from 'src/app/core/models/man';
// import { Man } from 'src/app/core/models/man';

export interface Man {
  id: Types.ObjectId;
}

@Component({
  selector: 'app-sport-form',
  templateUrl: './sport-form.component.html',
  styleUrls: ['./sport-form.component.scss'],
})
export class SportFormComponent implements OnInit {
  isUpdateMode: boolean;
  sportForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _sportService: SportService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<SportFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SportFormData
  ) {}

  ngOnInit(): void {
    this.initFormBuilder();
  }

  closeForm(id?: string) {
    this.sportForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(sport: Sport) {
    if (this.sportForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._sportService.update(sport).subscribe((response) => {
          this.closeForm(sport.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._sportService.create(sport).subscribe((response) => {
          this.closeForm(sport.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  men: Man[] = [];

  add(event: MatChipInputEvent): void {
    const value = event.value;

    // Add our fruit
    if (value) {
      this.men.push({ id: value });
    }

    console.table([...this.men]);
    // Clear the input value
    // event.chipInput!.clear();
  }

  remove(man: Man): void {
    const index = this.men.indexOf(man);

    if (index >= 0) {
      this.men.splice(index, 1);
    }
  }

  initFormBuilder() {
    this.sportForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.sportToUpdate.id
          : new Types.ObjectId(),
        // Validators.required,
      ],
      name: [
        this.data.isUpdateMode ? this.data.sportToUpdate.name : '',
        // Validators.required,
      ],
      desc: [
        this.data.isUpdateMode ? this.data.sportToUpdate.desc : '',
        // Validators.required,
      ],
      photo: [
        this.data.isUpdateMode ? this.data.sportToUpdate.photo : '',
        // Validators.required,
      ],
      men: [
        this.data.isUpdateMode ? this.data.sportToUpdate.men : [...this.men],
        // Validators.required,
      ],
      women: [
        this.data.isUpdateMode
          ? this.data.sportToUpdate.women
          : new Types.ObjectId(),
        // Validators.required,
      ],
    });
  }
}
