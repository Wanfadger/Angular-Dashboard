import { TimetableLesson } from './../model/timetablelesson.model';

import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.scss']
})
export class ExcelUploadComponent implements OnInit {
  displayedColumns:String[] = ['day', 'class', 'subject', 'startTime' , "endTime" , "firstName" , "surname" , "initial" ];
  dataSource !:MatTableDataSource<any>;
  isFilterMatch = true;
  pageSizeOptions = []
  isDatasourceEmpty  = true;

  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator

  constructor() { }

  ngOnInit(): void {
  }

  convertToDate(text:string){
   return //`${new Date(text).toLocaleTimeString()}`
  }

  ngAfterViewInit(){
    
  }

  clearTable() {
    this.dataSource.data = [];
    this.isDatasourceEmpty = true
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
    this.isFilterMatch = this.dataSource.filteredData.length ? true : false 
  }


  count = 0;
  importExcelData(data:TimetableLesson[]){
   
   this.dataSource  = new MatTableDataSource(data);
   this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.isDatasourceEmpty = false

    console.log(`COUNTER ${++this.count}`)

  }

}

