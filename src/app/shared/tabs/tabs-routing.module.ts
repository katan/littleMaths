import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'stats',
        loadChildren: () => import('@pages/stats/stats.module').then(m => m.StatsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('@pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'multiplication-tables',
        loadChildren: () => import('@pages/multiplication-tables/multiplication-tables.module').then(m => m.MultiplicationTablesModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
