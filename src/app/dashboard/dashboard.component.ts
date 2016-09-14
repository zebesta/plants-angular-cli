import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../plant';
import { PlantDetailComponent } from '../plant-detail/plant-detail.component';
import { PlantService } from '../plant.service';
import { PlantSearchComponent } from '../plant-search/plant-search.component';

@Component({
  moduleId: module.id,
  directives: [PlantSearchComponent],
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private plantService: PlantService,
    private router: Router
  ){}

  plants: Plant[] = [];

  ngOnInit(){
    this.plantService.getPlants().then(plants => this.plants = plants.slice(1,5));
  }

  goToDetail(plant: Plant){
    let link = ['detail', plant._id];
    this.router.navigate(link);
  }

}
