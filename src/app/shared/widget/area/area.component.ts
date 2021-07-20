import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chart !:Chart

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  createChart(){
  
  }

}


