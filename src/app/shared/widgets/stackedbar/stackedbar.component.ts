import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BarChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { DataService } from 'src/app/Services/data.service';
import { Data } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-stackedbar',
  templateUrl: './stackedbar.component.html',
  styleUrls: ['./stackedbar.component.css']
})
export class StackedbarComponent implements OnInit, AfterViewInit {

  readonly echartsExtentions: any[];
  echartsOptions: any = {}; 
  
  chartInstance: any;
  userdata: Data[] = [];
  usernames: string[] = [];

  constructor(private dataService: DataService) {
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
    this.userdata = this.dataService.userdata;
    this.usernames = this.userdata.map(user => user.userName);
  }

  ngOnInit() {
    this.echartsOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: this.usernames
      },
      yAxis: {
        type: 'value',
        
      },
      legend: {
        data: [
          'totalContainerCount', 
          'runningContainerCount', 
          'completedContainerCount', 
          'pendingContainerCount', 
          'failedContainerCount', 
          'succeededContainerCount'
        ],
        bottom: 0
      },
      series: [
        {
          name: 'totalContainerCount',
          type: 'bar',
          stack: 'total',
          data: this.userdata.map(user => user.totalContainerCount),
          itemStyle: {
            color: '#E6E6FA' // Lavender
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'runningContainerCount',
          type: 'bar',
          stack: 'total',
          data: this.userdata.map(user => user.runningContainerCount),
          itemStyle: {
            color: '#D8BFD8' // Thistle
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'completedContainerCount',
          type: 'bar',
          stack: 'total',
          data: this.userdata.map(user => user.completedContainerCount),
          itemStyle: {
            color: '#BA55D3' // Medium Orchid
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'pendingContainerCount',
          type: 'bar',
          stack: 'total',
          data: this.userdata.map(user => user.pendingContainerCount),
          itemStyle: {
            color: '#9370DB' // Medium Purple
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'failedContainerCount',
          type: 'bar',
          stack: 'total',
          data: this.userdata.map(user => user.failedContainerCount),
          itemStyle: {
            color: '#800080' // Purple
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'succeededContainerCount',
          type: 'bar',
          stack: 'total',
          data: this.userdata.map(user => user.succeededContainerCount),
          itemStyle: {
            color: '#4B0082' // Indigo
          },
          emphasis: {
            focus: 'series'
          }
        }
      ]
    };
  }

  ngAfterViewInit(): void {
    const chartDom = document.getElementById('chart')!;
    this.chartInstance = echarts.init(chartDom);
    this.chartInstance.setOption(this.echartsOptions);
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.chartInstance.resize();
    });
  }

}
