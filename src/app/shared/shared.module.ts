import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { HeaderPartComponent } from './widgets/header-part/header-part.component';
import { MatCardModule } from '@angular/material/card';
import { TableCompComponent } from './widgets/table-comp/table-comp.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnComponent } from './widgets/column/column.component';
import { EchartsxModule } from 'echarts-for-angular';
import { HighlightedBarComponent } from './widgets/highlighted-bar/highlighted-bar.component';
import { PieComponent } from './widgets/pie/pie.component';
import { StackedbarComponent } from './widgets/stackedbar/stackedbar.component';
import { DrilldownEchartsComponent } from './widgets/drilldown/drilldown.component';
import { ContainertypeComponent } from './widgets/containertype/containertype.component';


@NgModule({
  declarations: [
     HeaderPartComponent,
     TableCompComponent,
     ColumnComponent,
     HighlightedBarComponent,
     PieComponent,
     StackedbarComponent,
     DrilldownEchartsComponent,
     ContainertypeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatFormFieldModule,
    RouterModule,
    EchartsxModule

  ],
  exports: [
    HeaderPartComponent,
    TableCompComponent,
    ColumnComponent,
    HighlightedBarComponent,
    PieComponent,
    StackedbarComponent,
    DrilldownEchartsComponent,
    ContainertypeComponent
    
  ],
  providers: [
     
  ]
})
export class SharedModule { }
