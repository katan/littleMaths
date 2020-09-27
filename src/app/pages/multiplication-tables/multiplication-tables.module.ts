import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplicationRoutingModule } from './multiplication-tables.routing';
import { MultiplicationTablesPage } from './multiplication-tables.page.component';

@NgModule({
  declarations: [MultiplicationTablesPage],
  imports: [
    CommonModule,
    MultiplicationRoutingModule
  ]
})
export class MultiplicationTablesModule { }
