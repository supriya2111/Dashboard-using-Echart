import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BarChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { ContainerTypeStatusService } from 'src/app/Services/container-type-status.service';
import { ContainerTypeStatus } from 'src/app/interfaces/containerTypeStatus';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit, AfterViewInit {

  containerTypeStatusData: ContainerTypeStatus[] = [];
  readonly echartsExtensions: any[];
  echartsOptions: any = {}; 
  chartInstance: any;

  constructor(private containerTypeStatusService: ContainerTypeStatusService) {
    this.echartsExtensions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }

  ngOnInit() {
    // Assign data from the service
    this.containerTypeStatusData = this.containerTypeStatusService.containerTypeStatusData;

    // Extract types, running counts, and pending counts
    const types = this.containerTypeStatusData.map(item => item.type);
    const runningCounts = this.containerTypeStatusData.map(item => item.runningContainerCount);
    const pendingCounts = this.containerTypeStatusData.map(item => item.pendingContainerCount);

    // Set the chart options with the extracted data
    this.echartsOptions = {
      title: {
        text: 'Container Status'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Running Containers', 'Pending Containers']
      },
      grid: {
        left: 100
      },
      xAxis: {
        type: 'value',
        name: 'Count',
        axisLabel: {
          formatter: '{value}'
        }
      },
      yAxis: {
        type: 'category',
        inverse: true,
        data: types,
        axisLabel: {
          formatter: function (value: string) {
            return '{' + value + '| }\n{value|' + value + '}';
          },
          margin: 20,
          rich: {
            value: {
              lineHeight: 30,
              align: 'center'
            },
            // Custom styles for each type if needed
          }
        }
      },
      series: [
        {
          name: 'Running Containers',
          type: 'bar',
          data: runningCounts,
        },
        {
          name: 'Pending Containers',
          type: 'bar',
          data: pendingCounts,
        }
      ]
    }
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
