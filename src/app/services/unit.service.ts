import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  readonly API_URL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(this.API_URL);
  }
}
