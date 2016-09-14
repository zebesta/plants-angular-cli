import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { TestComponent } from './test/test.component';
import { PlantService } from './plant.service';
import { PlantSearchService } from './plant-search.service';
import { PlantSearchComponent } from './plant-search/plant-search.component';

@Component({
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES, TestComponent, PlantsComponent, PlantSearchComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PlantService, PlantSearchService]
})
export class AppComponent {
  title = 'Plants app using Angular 2 CLI!';
}
