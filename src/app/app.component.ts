import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PlantService } from './plant.service';
import { PlantSearchService } from './plant-search.service';

@Component({
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PlantService, PlantSearchService]
})
export class AppComponent {
  title = 'Plants app using Angular 2 CLI!';
}
