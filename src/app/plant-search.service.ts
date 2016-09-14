import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Plant } from './plant';

@Injectable()
export class PlantSearchService {
  private plantsUrl = 'http://localhost:8080/api/plants';

  constructor(private http: Http) { }

  search(term: string): Observable<Plant[]> {
    console.log("trying to search in plant search service");
    return this.http
               .get(this.plantsUrl)
               .map((r: Response) => r.json().data as Plant[]);
  }

}
