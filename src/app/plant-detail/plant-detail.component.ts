import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../plant';

@Component({
  moduleId: module.id,
  selector: 'my-plant-detail',
  templateUrl: 'plant-detail.component.html',
  styleUrls: ['plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  @Input()
  plant: Plant;

  constructor() { }

  ngOnInit() {
  }

}
