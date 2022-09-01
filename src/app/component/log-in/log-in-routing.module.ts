import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in.component';

const routes: Routes = [{ path: '', component: LogInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
            ReactiveFormsModule,
            FormsModule
          ],
  exports: [RouterModule]
})
export class LogInRoutingModule { }
