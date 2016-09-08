import { Component } from '@angular/core';
import { PlantsComponent } from './plants/plants.component';
import { TestComponent } from './test/test.component';
import { PlantService } from './plant.service';

@Component({
  moduleId: module.id,
  directives: [TestComponent, PlantsComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PlantService]
})
export class AppComponent {
  title = 'app works!';
}
