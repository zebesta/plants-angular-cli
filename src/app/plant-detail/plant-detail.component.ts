import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';

import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  moduleId: module.id,
  selector: 'my-plant-detail',
  templateUrl: 'plant-detail.component.html',
  styleUrls: ['plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  types: String[] = ['herb', 'vegetable', 'fruit','flower'];
  constructor(
    private plantService: PlantService
    // private route: ActivatedRoute
  ){}
  @Input()
  plant: Plant;

  @Output()
  close = new EventEmitter();
  error:any;
  navigated = false;

  ngOnInit(): void{
    // this.route.params.forEach((params: Params)=>{
    //   if(params['_id']!==undefined){
    //     let _id = params['_id'];
    //     this.navigated = true;
    //     this.plantService.getPlant(_id)
    //       .then(plant => this.plant = plant);
    //   }else{

        this.navigated = false;
        this.plant = new Plant();

    //   }
    // });
  }

  save(): void {
    console.log("Trying to save plant " + this.plant.name);
    this.plantService
      .save(this.plant)
      .then(plant=>{
        this.plant = plant; //saved plant with ID if new
        this.goBack(plant);
      })
      .catch(error => this.error = error); //TODO display error message here
  }

  goBack(savedPlant: Plant = null): void {
    this.close.emit(savedPlant);
    if (this.navigated) { window.history.back(); }
  }

}
