import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  pages = ["page1" , "page2" , "table" , "excel-uploading" ]
  constructor() { }

  ngOnInit(): void {
  }

}
