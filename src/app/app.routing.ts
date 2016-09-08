import {provideRouter, RouterConfig} from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';

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
  }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(appRoutes)
];
