import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { TestComponent } from './test/test.component';
import { PlantService } from './plant.service';

@Component({
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES, TestComponent, PlantsComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PlantService]
})
export class AppComponent {
  title = 'Plants app using Angular 2 CLI!';
}
