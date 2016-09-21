import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../plant';
import { PlantChildComponent } from '../plant-child/plant-child.component';
import { PlantService } from '../plant.service';

@Component({
  moduleId: module.id,
  selector: 'app-plant-detail-array',
  directives: [PlantChildComponent],
  templateUrl: 'plant-detail-array.component.html',
  styleUrls: ['plant-detail-array.component.css'],
  providers: [PlantService]
})
export class PlantDetailArrayComponent implements OnInit {
  plants: Plant[];
  errorMessage: any;

  constructor(
    private plantService: PlantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPlants();
  }
  getPlants() {
    this.plantService.getPlants()
      .then(
        plants => {
          this.plants = plants;
        },
        error => this.errorMessage = <any>error);
  }

}
