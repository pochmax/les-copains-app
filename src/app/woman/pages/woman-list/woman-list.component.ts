import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Woman } from 'src/app/core/models/woman';
import { WomanFormData } from 'src/app/core/models/womanFormData';
import { WomanFormComponent } from '../../components/woman-form/woman-form.component';
import { WomanService } from '../../services/woman.service';

@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.scss'],
})
export class WomanListComponent implements OnInit {
  women$: Observable<Woman[]>;
  displayedColumns: string[] = ['firstName', 'lastName', 'situation', 'id'];
  constructor(
    private _womanService: WomanService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.women$ = this._womanService.get();
  }

  showWomanDetails(woman: Woman) {
    this._router.navigateByUrl('/women/' + woman.id);
  }

  createWoman() {
    const womanFormData: WomanFormData = {
      isUpdateMode: false,
    };

    const dialogRef = this._dialog.open(WomanFormComponent, {
      data: womanFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }
}
