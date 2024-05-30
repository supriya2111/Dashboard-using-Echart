import { Component, Input, OnInit } from "@angular/core";
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { Quota } from "src/app/interfaces/quota.interface";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input()
  userList: Quota[] = [];

  usernames = ['Supriya','Jayesh','Prachi','Preet','palash','ajay','pnq']
  dayWiseStorage = [4, 6 ,7, 10, 9, 8, 7]; 


  readonly echartsExtentions: any[];
  echartsOptions: any = {};
  
  constructor() {
     this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }
  
  ngOnInit() {
    this.echartsOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: [...this.usernames],
        name: 'Storage',
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 14,
          padding: [10, 0, 0, 0],
          color: '#333333'
        }
      },
      yAxis: {
        type: 'value',
        name: 'Storage (GB)',
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 14,
          padding: [0, 0, 10, 0],
          color: '#333333'
        }
      },
      series: [
        {
          data: [...this.dayWiseStorage].map((value, index) => ({
            value: value,
            itemStyle: {
              color: this.getColor(index),
              barBorderRadius: [18, 18, 0, 0]
            }
          })),
          type: 'bar'
        }
      ]
    };   
  }
  getColor(index: number) {
    const colors = ['#2bc9dc',
    '#20cfe1',
    '#16d4e6',
    '#0dd9db',
    '#03dfd0',
    '#00e4c5',
    '#00e9ba',]; 
    return colors[index % colors.length]; 
  }
}
