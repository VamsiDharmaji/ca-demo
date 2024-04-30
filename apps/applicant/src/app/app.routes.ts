import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: 'forms',
    loadChildren: () => import('forms/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];
