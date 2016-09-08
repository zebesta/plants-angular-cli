import { Component, OnInit } from '@angular/core';
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
  plants: Plant[];
  selectedPlant: Plant;
  errorMessage: any;
  addingPlant: boolean;

  constructor(
    private plantService: PlantService
  ) { }

  ngOnInit() {
    console.log("Calling on init in the plants component");
    this.getPlants();
  }

  onSelect(plant: Plant){
    this.selectedPlant = plant;
  }

  getPlants() {
    console.log('calling get plants from plants component');
    // this.plants = PLANTS;

    this.plantService.getPlants()
      .then(
        plants => this.plants = plants,
        error => this.errorMessage = <any>error);

    // this.plants = this.plantService.getPlants();
  }

  addPlant():void{
    console.log('add plant');
    // this.addingPlant = true;
    // this.selectedPlant = null;
  }
  close(savedPlant: Plant): void {
    console.log("Close function from the plants component");
    // this.addingPlant = false;
    // if (savedPlant) { this.getPlants(); }
  }
  deletePlant(plant: Plant, event: any){
    console.log("deleting plant "+ plant.name + " with id: "+plant._id);
    // event.stopPropagation();
    // this.plantService
    //   .delete(plant)
    //   .then(res=>{
    //     this.plants = this.plants.filter(p => p!==plant);
    //     if(this.selectedPlant === plant){
    //       this.selectedPlant = null;
    //     }
    //   })
    //   .catch(error => {
    //     this.errorMessage = error;
    //   });
  }
  goToDetail(){
    console.log("go to detail");
    // let link = ['detail', this.selectedPlant._id];
    // this.router.navigate(link);
  }
  goToType(plant: Plant){
    //Need to either reload a new pahe with this filter or filter the existing results here
    console.log("Attempting to go to type!" + plant.type);
  }

}
const PLANTS: Plant[] = [
  {"_id":"57a8ac953200c113b0000002","type":"vegetable","color":"Orange","name":"Carrot","__v":0},
  {"_id":"57a8b0a33200c113b0000005","type":"vegetable","color":"purple","name":"beets","__v":0},
  {"_id":"57aa0cf1d7f42e3307000001","type":"vegetable","color":"orange","name":"pumpkin","__v":0},
  {"_id":"57aa0d1e8c44144107000001","type":"vegetable","color":"orange","name":"pumpkin2","__v":0},
  {"_id":"57aa0d258c44144107000002","type":"vegetable","color":"orange","name":"pumpkin3","__v":0},
  {"_id":"57aa0da7a223ba4407000001","type":"vegetable","color":"orange","name":"pumpkin4","__v":0}
]
