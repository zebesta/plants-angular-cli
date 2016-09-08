import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlantService {
  plants: Plant[] = [];
  private plantsUrl = 'http://localhost:8080/api/plants'
  private extractData(res: Response){
    let body = res.json();
    // return body.data || { };
    return body;
  }
  private handleError (error: any) {
    console.log("Error!!! " + error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }


  constructor (
    private http: Http
  ){};

 getPlants(): Promise<Plant[]> {
  // return Promise.resolve(PLANTS);

  return this.http.get(this.plantsUrl)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
}

}

const PLANTS: Plant[] = [
  {"_id":"57a8b0313200c113b0000003","type":"fruit","color":"red","name":"tomato","__v":0},
  {"_id":"57c06fb88fea828123000002","type":"flower","color":"yellow","name":"sunflower","__v":0},
  {"_id":"57c06fbb8fea828123000003","__v":0,"color":"orange","name":"papaya","type":"fruit"},
  {"_id":"57c071be104356a023000001","type":"vegetable","color":"yellow","name":"bell pepper","__v":0},
  {"_id":"57c07274104356a023000002","type":"vegetable","color":"green","name":"cucumber","__v":0},
  {"_id":"57c07339104356a023000003","type":"herb","color":"green","name":"mint","__v":0},
  {"_id":"57c4555d7442fc4005000001","type":"fruit","color":"green","name":"watermelon","__v":0},
  {"_id":"57c45d737442fc4005000002","type":"vegetable","color":"green","name":"Arugala","__v":0},
  {"_id":"57c46a1898cc969809000001","type":"vegetable","color":"orange","name":"pumpkin","__v":0}
]
