import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BarChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { ContainerTypesService } from 'src/app/Services/container-types.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-containertype',
  templateUrl: './containertype.component.html',
  styleUrls: ['./containertype.component.css']
})
export class ContainertypeComponent implements OnInit, AfterViewInit {

  readonly echartsExtentions: any[];
  echartsOptions: any = {}; 
  
  chartInstance: any;
  containerTypeData: any[] = [];
  userdata: any[] = [];
  usernames: string[] = [];

  constructor(private contianertypeService: ContainerTypesService, private dataService: DataService) {
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
    this.containerTypeData = this.contianertypeService.containerType;
    this.userdata = this.dataService.userdata;
    this.usernames = this.containerTypeData.map(user => user.username);
  }

  ngOnInit() {
    const colorWithGradient = (color: string) => {
      return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: color },
        { offset: 1, color: echarts.color.lift(color, 0.3) }
      ]);
    };

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
        data: this.usernames,
      },
      yAxis: [
        {
          type: 'value',
          name: 'Total Running Containers',
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 18,
            padding: [0, 0, 15, 0],
          },
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'black'
            }
          },
        },
        {
          type: 'value',
          name: 'Total number of Containers',
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 18,
            padding: [20, 0, 0, 0],
          },
          position: 'right',
          alignTicks: true,
          min: -5,
          interval: 1,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'red'
            }
          },
        },
      ],
      legend: {
        data: [
          'Total Running', 
          'Blast', 
          'GUI', 
          'Notebook',    
          'Code',
          'Container',
          'Others',
          'Succeeded',
          'Pending',
          'Running',
          'Completed',
          'Failed',
          'Total Containers'
        ],
        bottom: 12,
        nameTextStyle: {
          fontSize: 18,
          padding: [25, 0, 0, 0],
          color: 'black'
        }
      },
      series: [
        {
          name: 'Others',
          type: 'bar',
          stack: 'total',
          barWidth: '25%',
          data: this.containerTypeData.map(user => user.otherConatinercount),
          itemStyle: {
            color: colorWithGradient('#1e45b0'),
            barBorderRadius: [0, 0, 18, 18]
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Container',
          type: 'bar',
          stack: 'total',
          barWidth: '25%',
          data: this.containerTypeData.map(user => user.ContainerConatinercount),
          itemStyle: {
            color: colorWithGradient('#4b78f2')
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Notebook',
          type: 'bar',
          stack: 'total',
          barWidth: '25%', 
          data: this.containerTypeData.map(user => user.NotebookConatinercount),
          itemStyle: {
            color: colorWithGradient('#16c916') 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'GUI',
          type: 'bar',
          stack: 'total',
          barWidth: '25%', 
          data: this.containerTypeData.map(user => user.GuiConatinercount),
          itemStyle: {
            color: colorWithGradient('#71f075') 
          
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Code',
          type: 'bar',
          stack: 'total',
          barWidth: '25%', 
          data: this.containerTypeData.map(user => user.CodeConatinercount),
          itemStyle: {
            color: colorWithGradient('#069ea1') 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Blast',
          type: 'bar',
          stack: 'total',
          barWidth: '25%',
          data: this.containerTypeData.map(user => user.blastConatinercount),
          itemStyle: {
            color: colorWithGradient('#2bc9dc') 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Total Running',
          type: 'bar',
          stack: 'total',
          barWidth: '25%', 
          data: this.containerTypeData.map(user => user.totalRunningcontainer),
          itemStyle: {
            color: colorWithGradient('#89e0e8'),
            barBorderRadius: [18, 18, 0, 0]
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Total Containers',
          type: 'line',
          yAxisIndex: 1, // Use second y-axis
          data: this.userdata.map(user => user['totalContainerCount']),
          itemStyle: {
            color: 'hotpink' // Lavender
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Running',
          type: 'line',
          yAxisIndex: 1, // Use second y-axis
          data: this.userdata.map(user => user['runningContainerCount']),
          itemStyle: {
            color: 'purple' // Thistle
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Completed',
          type: 'line',
          yAxisIndex: 1, // Use second y-axis
          data: this.userdata.map(user => user['completedContainerCount']),
          itemStyle: {
            color: '#0fccf2' 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Pending',
          type: 'line',
          yAxisIndex: 1, // Use second y-axis
          data: this.userdata.map(user => user['pendingContainerCount']),
          itemStyle: {
            color: 'blue' 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Failed',
          type: 'line',
          yAxisIndex: 1, // Use second y-axis
          data: this.userdata.map(user => user['failedContainerCount']),
          itemStyle: {
            color: 'green' 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Succeeded',
          type: 'line',
          yAxisIndex: 1, // Use second y-axis
          data: this.userdata.map(user => user['succeededContainerCount']),
          itemStyle: {
            color: 'red' 
          },
          emphasis: {
            focus: 'series'
          }
        }
      ],
      media: [
        {
          query: {
            maxWidth: 500
          },
      //     option: {
      //       grid: {
      //         left: '10%',
      //         right: '10%',
      //         bottom: '20%',
      //         top: '10%',
      //         containLabel: true
      //       },
            legend: {
              show: false
            },
      //       yAxis: [
      //         {
      //           nameTextStyle: {
      //             fontSize: 12,
      //             padding: [0, 0, 10, 0],
      //           },
      //         },
      //         {
      //           nameTextStyle: {
      //             fontSize: 12,
      //             padding: [10, 0, 0, 0],
      //           },
      //         },
      //       ]
      //     }
        }
      ]
    };
  }

  ngAfterViewInit(): void {
    const chartDom = document.getElementById('chart')!;
    this.chartInstance = echarts.init(chartDom);
    this.chartInstance.setOption(this.echartsOptions);
    
    window.addEventListener('resize', () => {
      this.chartInstance.resize();
    });
  }
}
