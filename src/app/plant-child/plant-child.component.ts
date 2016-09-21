import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../plant'

@Component({
  moduleId: module.id,
  selector: 'app-plant-child',
  templateUrl: 'plant-child.component.html',
  styleUrls: ['plant-child.component.css']
})
export class PlantChildComponent implements OnInit {
  @Input() plant: Plant;

  constructor() { }

  ngOnInit() {
  }

}
