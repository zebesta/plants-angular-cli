/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PlantSearchService } from './plant-search.service';

describe('Service: PlantSearch', () => {
  beforeEach(() => {
    addProviders([PlantSearchService]);
  });

  it('should ...',
    inject([PlantSearchService],
      (service: PlantSearchService) => {
        expect(service).toBeTruthy();
      }));
});
