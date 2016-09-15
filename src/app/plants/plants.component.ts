import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../plant';
import { PlantDetailComponent } from '../plant-detail/plant-detail.component';
import { PlantService } from '../plant.service';

@Component({
  moduleId: module.id,
  directives: [PlantDetailComponent],
  selector: 'app-plants',
  templateUrl: 'plants.component.html',
  styleUrls: ['plants.component.css'],
  providers: [PlantService]
})
export class PlantsComponent implements OnInit {
  allPlants: Plant[];
  plants: Plant[];
  herbs: Plant[];
  vegetables: Plant[];
  fruits: Plant[];
  flowers: Plant[];
  selectedPlant: Plant;
  addNewPlant: boolean = false;
  plantToAdd: Plant = new Plant();
  errorMessage: any;
  addingPlant: boolean;
  types: string[] = ['vegetable', 'fruit', 'herb', 'flower'];
  t: string;
  error: any;

  constructor(
    private plantService: PlantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPlants();
  }

  get diagnostic() { return JSON.stringify(this.plantToAdd); }

  onSelect(plant: Plant){
    this.selectedPlant = plant;
  }
  toggleAddNewPlant(){
    this.addNewPlant = true;
  }
  save(): void {
    console.log("Trying to save plant " + this.plantToAdd.name);
    this.addNewPlant = false;
    this.plantService
      .save(this.plantToAdd)
      .then(plantToAdd=>{
        this.plantToAdd = new Plant(); //saved plant with ID if new
        this.getPlants();
        // this.goBack(plant);
      })
      .catch(error => this.error = error); //TODO display error message here
  }

  getPlants() {
    this.plantService.getPlants()
      .then(
        plants => {
          this.plants = plants;
          this.allPlants = this.plants;
        },
        error => this.errorMessage = <any>error);
    this.allPlants = this.plants;
    // this.herbs = this.plants.filter(p => p.type=='herb');
    // this.vegetables = this.plants.filter(p => p.type=='vegetable');
    // this.fruits = this.plants.filter(p => p.type=='plant');
    // this.flowers = this.plants.filter(p => p.type=='flower');
  }

  addPlant():void{
    console.log('add plant');
    this.addingPlant = true;
    this.selectedPlant = null;
  }

//=== The add example from the tour of heroes example, should provide an actual update to the plants list==
  add(name: string, type: string, color: string, imageurl: string): void {
  name = name.trim();
  type = "vegetable";
  color = "blue";
  imageurl = "google.com";
  if (!name) { return; }
  this.plantService.addPlant(name, type, color, imageurl)
    .then(plant => {
      this.plants.push(plant);
      this.selectedPlant = null;
    });
}
  close(savedPlant: Plant): void {
    console.log("Close function from the plants component");
    this.addingPlant = false;
    if (savedPlant) { this.getPlants(); }
  }
  deletePlant(plant: Plant, event: any){
    console.log("deleting plant "+ plant.name + " with id: "+plant._id);
    event.stopPropagation();
    this.plantService
      .delete(plant)
      .then(res=>{
        this.plants = this.plants.filter(p => p!==plant);
        if(this.selectedPlant === plant){
          this.selectedPlant = null;
        }
      })
      .catch(error => {
        this.errorMessage = error;
      });
  }
  goToDetail(){
    console.log("go to detail");
    let link = ['detail', this.selectedPlant._id];
    this.router.navigate(link);
  }
  goToType(type: string){
    //Need to either reload a new pahe with this filter or filter the existing results here
    console.log("Attempting to go to type!" + type);
    event.stopPropagation();
    // this.plants = this.plants.filter(p => p.type==plant.type);

    //using the actual API end point:
    this.plantService.getType(type)
      .then(
        plants => {
          this.plants = plants;
        },
        error => this.errorMessage = <any>error);
  }
  // goToType(){
  //   console.log("Attempting to go to type!");
  //   event.stopPropagation();
  //   this.plants = this.plants.filter(p => p.type=='vegetable');
  // }
  goToAllAgain(){
    this.plants = this.allPlants;
  }

}
// const PLANTS: Plant[] = [
//   {"_id":"57a8ac953200c113b0000002","type":"vegetable","color":"Orange","name":"Carrot","__v":0},
//   {"_id":"57a8b0a33200c113b0000005","type":"vegetable","color":"purple","name":"beets","__v":0},
//   {"_id":"57aa0cf1d7f42e3307000001","type":"vegetable","color":"orange","name":"pumpkin","__v":0},
//   {"_id":"57aa0d1e8c44144107000001","type":"vegetable","color":"orange","name":"pumpkin2","__v":0},
//   {"_id":"57aa0d258c44144107000002","type":"vegetable","color":"orange","name":"pumpkin3","__v":0},
//   {"_id":"57aa0da7a223ba4407000001","type":"vegetable","color":"orange","name":"pumpkin4","__v":0}
// ]
