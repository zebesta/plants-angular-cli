import { Component } from '@angular/core';
import { PlantsComponent } from './plants/plants.component';
import { TestComponent } from './test/test.component';

@Component({
  moduleId: module.id,
  directives: [TestComponent, PlantsComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
