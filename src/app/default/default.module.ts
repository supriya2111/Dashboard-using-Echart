import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EchartsxModule } from 'echarts-for-angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatChipsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    EchartsxModule
  ]
})
export class DefaultModule { }
