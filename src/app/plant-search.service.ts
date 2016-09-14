import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Plant } from './plant';

@Injectable()
export class PlantSearchService {
  private plantsUrl = 'http://localhost:8080/api/plants';

  constructor(private http: Http) { }

  search(term: string): Observable<Plant[]> {
    console.log("trying to search in plant search service with: " +term);
    return this.http
               .get(`http://localhost:8080/api/plants/?name=${term}`)
               .map((r: Response) => r.json() as Plant[]);
  }

}
