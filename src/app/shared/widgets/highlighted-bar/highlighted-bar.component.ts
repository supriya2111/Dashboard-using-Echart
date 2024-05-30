import { Component, OnInit } from "@angular/core";
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";


@Component({
  selector: 'app-highlighted-bar',
  templateUrl: './highlighted-bar.component.html',
  styleUrls: ['./highlighted-bar.component.css']
})
export class HighlightedBarComponent implements OnInit {

  readonly echartsExtentions: any[];
  echartsOptions: any = {};
  
  constructor() {
     this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }
  
  ngOnInit() {
     this.echartsOptions = {
         tooltip: {
             trigger: "axis",
             axisPointer: {
             type: "shadow"
             }
         },
         grid: {
             left: "3%",
             right: "4%",
             bottom: "8%",
             top: "3%",
             containLabel: true
         },
         xAxis: {
              type: "value"
         },
         yAxis: {
             type: "category",
             data: ["sat", "sun", "mon", "tue", "wed", "thu", "fri"],
             axisLabel: {
             interval: 0,
             rotate: 15
             }
         },
         legend: {
             data: ["ali", "behrooz"],
             bottom: 0
         },
         series: [
         {
             name: "ali",
             type: "bar",
             data: [10, 15, 17, 4, 15, 31, 2]
         },
         {
             name: "behrooz",
             type: "bar",
             data: [1, 17, 12, 11, 40, 3, 21]
         }
         ]
     };
  }
}
