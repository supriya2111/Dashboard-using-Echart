import { Component, OnInit, AfterViewInit } from "@angular/core";
import { PieChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent, GraphicComponent } from "echarts/components";
import { EChartsOption } from "echarts";
import * as echarts from 'echarts/core';
import { Storage } from "src/app/interfaces/storage.interface";
import { StorageService } from "src/app/Services/storage.service";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, AfterViewInit {

  storageData: Storage[] = [];
  userCount: number = 10; 

  readonly echartsExtensions: any[];
  echartsOptions: EChartsOption = {};
  chartInstance: any;

  constructor(private storageService: StorageService) {
    this.echartsExtensions = [PieChart, TooltipComponent, GridComponent, LegendComponent, GraphicComponent];
    this.storageData = this.storageService.storageData;
  }

  ngOnInit() {
    this.setChartOptions(this.userCount);
  }

  ngAfterViewInit() {
    const chartDom = document.getElementById('pieChart')!;
    this.chartInstance = echarts.init(chartDom);
    this.chartInstance.setOption(this.echartsOptions);

    window.addEventListener('resize', () => {
      this.chartInstance.resize();
    });
  }

  setChartOptions(userCount: number) {
    const data = this.storageData.slice(0, userCount).map(user => ({
      value: user.quotaUsed,
      name: user.username,
      itemStyle: {
        color: '#' + Math.floor(Math.random()*16777215).toString(16) // Generate random color
      }
    }));

    this.echartsOptions = {
      tooltip: {
        trigger: 'item',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          color: '#000'
        },
        padding: 20
      },
      legend: {
        bottom:10,
        left: 'center'
      },
      toolbox: {
        show: true,
      },
      series: [
        {
          name: 'User Data',
          type: 'pie',
          radius: ['30%', '80%'],
          center: ['50%', '40%'],
          roseType: 'radius',
          labelLine: {
            show: true,
            length: 10,
            length2: 20
          },
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 2
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: data
        }
      ]
    };
  }

  updateChart() {
    this.setChartOptions(this.userCount);
    this.chartInstance.setOption(this.echartsOptions);
  }
}
