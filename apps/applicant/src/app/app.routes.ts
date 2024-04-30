import { Route } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'colleges',
        loadChildren: () => import('colleges/Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'forms',
        loadChildren: () => import('forms/Routes').then((m) => m.remoteRoutes),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      }]
  }
];
