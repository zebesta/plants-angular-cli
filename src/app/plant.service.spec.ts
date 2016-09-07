/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PlantService } from './plant.service';

describe('Service: Plant', () => {
  beforeEach(() => {
    addProviders([PlantService]);
  });

  it('should ...',
    inject([PlantService],
      (service: PlantService) => {
        expect(service).toBeTruthy();
      }));
});
