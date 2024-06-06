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
        left: '5%',
        right: '7%',
        bottom: '3%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: this.usernames,
        axisLabel: {
          fontSize: 16, 
          color: 'black' 
        }
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
      legend: [{
        data: [
          'Total Running',
          'Blast',
          'GUI',
          
        ],
        orient: 'vertical',
        animation:true,
        animationDurationUpdate :800,
        align: 'auto',
        right: '5%',
        top: '2%',
        itemStyle: {
          fontSize: 28,
          padding: [25, 0, 0, 0],
        }
      },
      {
        data: [

          'Notebook',
          'Code',
          'Container',
          'Others',
        ],
        orient: 'vertical',
        align: 'auto',
        animation:true,
        animationDurationUpdate :800,
        right: '20%',
        top: '2%',
        itemStyle: {
          fontSize: 18,
          padding: [25, 0, 0, 0],
          fontWeight:'bolder'
        }
      },
      {
        data: [
          
          'Succeeded',
          'Pending',
          'Running',
        ],
        orient: 'vertical',
        align: 'auto',
        animation:true,
        animationDurationUpdate :800,
        right: '35%',
        top: '2%',
        itemStyle: {
          fontSize: 18,
          padding: [25, 0, 0, 0],
        }
      },{
        data: [
          'Completed',
          'Failed',
          'Total Containers'
        ],
        orient: 'vertical',
        align: 'auto',
        animation:true,
        animationDurationUpdate :800,
        right: '50%',
        top: '2%',
        itemStyle: {
          fontSize: 18,
          padding: [25, 0, 0, 0],
        }
      }],
     
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
          smooth:true,
          yAxisIndex: 1, 
          data: this.userdata.map(user => user['totalContainerCount']),
          itemStyle: {
            color: 'hotpink' 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Running',
          type: 'line',
          smooth:true,
          yAxisIndex: 1, 
          data: this.userdata.map(user => user['runningContainerCount']),
          itemStyle: {
            color: 'purple' 
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Completed',
          type: 'line',
          smooth:true,
          yAxisIndex: 1, 
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
          smooth:true,
          yAxisIndex: 1, 
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
          smooth:true,
          yAxisIndex: 1,
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
          smooth:true,
          yAxisIndex: 1, 
          data: this.userdata.map(user => user['succeededContainerCount']),
          itemStyle: {
            color: 'red' 
          },
          emphasis: {
            focus: 'series'
          }
        }
      ],
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
