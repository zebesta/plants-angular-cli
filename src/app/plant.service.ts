import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlantService {
  plants: Plant[] = [];

  //local
  // private plantsUrl = 'http://localhost:8080/api/plants'
  //web
  private plantsUrl = 'http://nameless-cliffs-62966.herokuapp.com/api/plants'

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
  getType(type: string): Promise<Plant[]>{
    return this.http.get(this.plantsUrl + '/types/' + type)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  getPlant(_id: string){
    return this.getPlants()
      .then(plants => plants.find(plant => plant._id === _id));
  }

  addPlant(name: string, type: string, color: string, imageurl: string): Promise<Plant> {
    let body = JSON.stringify({ name, type, color, imageurl });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.plantsUrl, body, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }
  // create(name: string): Promise<Plant> {
  //   return this.http
  //     .post(this.plantsUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }
  delete(plant: Plant): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.plantsUrl}/${plant._id}`;
    console.log("Trying to delete plant with url: "+ url);
    return this.http
      // .delete(url, {headers: headers})
      .delete(url)
      .toPromise()
      .catch(this.handleError);
  }
  save(plant: Plant): Promise<Plant>  {
    if (plant._id) {
      return this.put(plant);
    }
    return this.post(plant);
  }
  private put(plant: Plant): Promise<Plant> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("In the put from service!!!");

    let url = `${this.plantsUrl}/${plant._id}`;
    let body = JSON.stringify({ plant });
    let options = new RequestOptions({headers: headers});
    console.log(body);

    return this.http
               .put(url, body, options)
               .toPromise()
               .then(() => plant)
               .catch(this.handleError);
  }

  private post(plant: Plant): Promise<Plant> {
    console.log("In the post from service!!!");

    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.plantsUrl, JSON.stringify(plant), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

}

const PLANTS: Plant[] = [
  {"_id":"57a8b0313200c113b0000003","type":"fruit","color":"red","name":"tomato","imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg","__v":0},
  {"_id":"57c06fb88fea828123000002","type":"flower","color":"yellow","name":"sunflower","imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg","__v":0},
  {"_id":"57c06fbb8fea828123000003","__v":0,"color":"orange","name":"papaya","type":"fruit","imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg"},
  {"_id":"57c071be104356a023000001","type":"vegetable","color":"yellow","name":"bell pepper","__v":0,"imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg"},
  {"_id":"57c07274104356a023000002","type":"vegetable","color":"green","name":"cucumber","__v":0,"imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg"},
  {"_id":"57c07339104356a023000003","type":"herb","color":"green","name":"mint","__v":0,"imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg"},
  {"_id":"57c4555d7442fc4005000001","type":"fruit","color":"green","name":"watermelon","__v":0,"imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg"},
  {"_id":"57c45d737442fc4005000002","type":"vegetable","color":"green","name":"Arugala","__v":0,"imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg"},
  {"_id":"57c46a1898cc969809000001","type":"vegetable","color":"orange","name":"pumpkin","__v":0,"imageurl":"http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg"}
]
