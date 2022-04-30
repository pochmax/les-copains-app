import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Man } from 'src/app/core/models/man';
import { ManFormData } from 'src/app/core/models/manFormData';
import { ManFormComponent } from '../../components/man-form/man-form.component';
import { ManService } from '../../services/man.service';

@Component({
  selector: 'app-man-list',
  templateUrl: './man-list.component.html',
  styleUrls: ['./man-list.component.scss'],
})
export class ManListComponent implements OnInit {
  men$: Observable<Man[]>;
  displayedColumns: string[] = ['firstName', 'lastName', 'situation', 'id'];
  constructor(
    private _manService: ManService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.men$ = this._manService.get();
  }

  showManDetails(man: Man) {
    this._router.navigateByUrl('/men/' + man.id);
  }

  createMan() {
    const manFormData: ManFormData = {
      isUpdateMode: false,
    };

    const dialogRef = this._dialog.open(ManFormComponent, {
      data: manFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }
}
