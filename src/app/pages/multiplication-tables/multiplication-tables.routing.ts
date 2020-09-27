import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplicationTablesPage } from './multiplication-tables.page.component';


const routes: Routes = [
  {
    path: '',
    component: MultiplicationTablesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplicationRoutingModule {}
