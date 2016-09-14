import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { PlantSearchService } from '../plant-search.service'
import { Plant } from '../plant';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-plant-search',
  templateUrl: 'plant-search.component.html',
  styleUrls: ['plant-search.component.css'],
  providers: [PlantSearchService]
})
export class PlantSearchComponent implements OnInit {
  plants: Observable<Plant[]>;
  private searchTerms: Subject<string> = new Subject<string>();

  constructor(
    private plantSearchService: PlantSearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.plants = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      //return search service results or an empty array if there are none
      .switchMap(term => term ? this.plantSearchService.search(term) : Observable.of<Plant[]>([]))
      .catch(error =>{
        console.log(error);
        return Observable.of<Plant[]>([]); //return empty array on error
      });
  }

  goToDetail(plant: Plant): void {
    let link = ['/detail', plant._id];
    this.router.navigate(link);
  }

}
