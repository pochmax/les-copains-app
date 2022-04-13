import { environment } from './../../../environments/environment';
import { Sport } from './../../core/models/sport';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ObjectID from 'bson-objectid';
import { Schema, Types } from 'mongoose';
// import ObjectID from 'bson-objectid';

@Injectable()
export class SportService {
  private readonly sportPath: string = '/sports';

  constructor(private _http: HttpClient) {}

  get(): Observable<Sport[]> {
    return this._http.get<Sport[]>(
      `${environment.apiBaseUrl}${this.sportPath}`
    );
  }

  getById(id: string): Observable<Sport> {
    return this._http.get<Sport>(
      `${environment.apiBaseUrl}${this.sportPath}/${id}`
    );
  }

  create(sport: Sport): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.sportPath}`,
      sport
    );
  }

  update(sport: Sport): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.sportPath}/${sport.id}`,
      sport
    );
  }

  delete(id: string): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.sportPath}/${id}`
    );
  }
}
