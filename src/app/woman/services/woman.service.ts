import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Woman } from 'src/app/core/models/woman';
import { environment } from 'src/environments/environment';
import { Types } from 'mongoose';
import ObjectID from 'bson-objectid';

@Injectable({
  providedIn: 'root',
})
export class WomanService {
  private readonly womanPath: string = '/women';

  constructor(private _http: HttpClient) {}

  get(): Observable<Woman[]> {
    return this._http.get<Woman[]>(
      `${environment.apiBaseUrl}${this.womanPath}`
    );
  }

  getById(id: ObjectID): Observable<Woman> {
    return this._http.get<Woman>(
      `${environment.apiBaseUrl}${this.womanPath}/${id}`
    );
  }

  create(woman: Woman): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.womanPath}`,
      woman
    );
  }

  update(sport: Woman): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.womanPath}/${sport.id}`,
      sport
    );
  }

  delete(id: ObjectID): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.womanPath}/${id}`
    );
  }
}
