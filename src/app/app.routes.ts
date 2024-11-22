import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreLocationComponent } from './pages/store-location/store-location.component';
import { ExampleComponent } from './pages/example/example.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store-locations', component: StoreLocationComponent },
  { path: 'show-analysis', component: AnalysisComponent },
  { path: 'example', component: ExampleComponent },
];
