import {provideRouter, RouterConfig} from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantSearchComponent } from './plant-search/plant-search.component';
import { PlantDetailArrayComponent } from './plant-detail-array/plant-detail-array.component';

const appRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'plants',
    component: PlantsComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:_id',
    component: PlantDetailComponent
  },
  {
    path: 'search',
    component: PlantSearchComponent
  },
  {
    path: 'plantarray',
    component: PlantDetailArrayComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(appRoutes)
];
