import { TimetableLesson } from './../model/timetablelesson.model';

import { MatSort } from '@angular/material/sort';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource , MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.scss']
})
export class ExcelUploadComponent {
  displayedColumns :string[] = [ 'day', 'class', 'subject', 'startTime' , "endTime" , "firstName" , "surname" , "initial" ];
  dataSource !:MatTableDataSource<any>;
  isFilterMatch = true;
  pageSizeOptions = []
  isDatasourceEmpty  = true;

  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator
  @ViewChild(MatTable) excelTable !: MatTable<TimetableLesson[]>
  @ViewChild('uploadField') uploadField !: ElementRef


  convertToTime(text:string){
    return new Date(text).toLocaleTimeString();
  }

  clearTable() {
    this.uploadField.nativeElement.value = ""
    this.dataSource.data = [];
    this.isDatasourceEmpty = true
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
    this.isFilterMatch = this.dataSource.filteredData.length ? true : false
  }


  importExcelData(data:TimetableLesson[]){
   this.dataSource  = new MatTableDataSource(data);
   this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.isDatasourceEmpty = false
  }

}
