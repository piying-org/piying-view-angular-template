import { Routes } from '@angular/router';
import { PiyingPage } from './piying-page/component';

export const routes: Routes = [
  { path: '', children: [{ path: '', component: PiyingPage }] },
];
