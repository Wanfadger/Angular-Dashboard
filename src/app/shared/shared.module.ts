import { DashboardTableComponent } from './../content/dashboard-table/dashboard-table.component';

import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule} from 'angular-highcharts';





import { AreaComponent } from './widget/area/area.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './../content/dashboard/dashboard.component';
import { Page1Component } from './../content/page1/page1.component';
import { ContentComponent } from './../content/content/content.component';
import { HeaderComponent } from './header/header/header.component';
import { Page2Component } from '../content/page2/page2.component';

const declarations = [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    ContentComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    DashboardTableComponent
]




@NgModule({
  declarations: [
    declarations,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ChartModule,
    
  ],
  exports:[declarations , MaterialModule , RouterModule , ChartModule ]
})
export class SharedModule { }
