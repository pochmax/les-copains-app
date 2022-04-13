import { HttpClient } from '@angular/common/http';
import { TypeVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Man } from 'src/app/core/models/man';
import { environment } from 'src/environments/environment';
import { Types } from 'mongoose';
import ObjectID from 'bson-objectid';

@Injectable({
  providedIn: 'root',
})
export class ManService {
  private readonly manPath: string = '/men';

  constructor(private _http: HttpClient) {}

  get(): Observable<Man[]> {
    return this._http.get<Man[]>(`${environment.apiBaseUrl}${this.manPath}`);
  }

  getById(id: string): Observable<Man> {
    return this._http.get<Man>(
      `${environment.apiBaseUrl}${this.manPath}/${id}`
    );
  }

  create(man: Man): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.manPath}`,
      man
    );
  }

  update(sport: Man): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.manPath}/${sport.id}`,
      sport
    );
  }

  delete(id: string): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.manPath}/${id}`
    );
  }
}
