import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AutocompleteModule } from 'ng2-input-autocomplete';






@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    AutocompleteModule.forRoot(),
  ]
})
export class DashboardModule { }
