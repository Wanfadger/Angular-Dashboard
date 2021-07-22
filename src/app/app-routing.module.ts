import { ExcelUploadComponent } from './content/uploading/excel-upload/excel-upload.component';
import { DashboardTableComponent } from './content/dashboard-table/dashboard-table.component';
import { ContentComponent } from './content/content/content.component';
import { Page2Component } from './content/page2/page2.component';
import { Page1Component } from './content/page1/page1.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" , redirectTo:"/dashboard" , pathMatch:"full"},
  {path:"dashboard" , component:ContentComponent , children:[
    {path:"" , component:DashboardComponent},
    {path:"page1" , component:Page1Component},
    {path:"page2" , component:Page2Component},
    {path:"table" , component:DashboardTableComponent},
    {path:"excel-uploading" , component:ExcelUploadComponent},

    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
