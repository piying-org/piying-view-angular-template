import { Routes } from '@angular/router';
import { PiyingPage } from './piying-page/component';
import { PiyingManualPage } from './piying-manual-page/component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PiyingPage },
      { path: 'manual', component: PiyingManualPage },
    ],
  },
];
