import { Component, OnInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';
import { DataService } from 'src/app/Services/data.service';
import { Data } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownEchartsComponent implements OnInit, OnDestroy {

  userData: Data[] = [];
  chartInstance!: echarts.ECharts;

  colorsWarm = ['#E57373', '#F06292', '#BA68C8', '#FFB74D', '#FFD54F', '#A1887F'];

  constructor(private dataService: DataService) {
    this.userData = this.dataService.userdata;
  }

  ngOnInit(): void {
    this.initChart();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }

  initChart(): void {
    const chartDom = document.getElementById('echart')!;
    this.chartInstance = echarts.init(chartDom);

    const seriesData = this.userData.map((user, index) => ({
      name: user.userName,
      value: user.totalContainerCount,
      itemStyle: {
        color: this.colorsWarm[index % this.colorsWarm.length]
      },
      drilldown: user.userName
    }));

    const drilldownSeries = this.userData.map(user => ({
      name: user.userName,
      id: user.userName,
      data: [
        { name: 'Running', value: user.runningContainerCount },
        { name: 'Completed', value: user.completedContainerCount },
        { name: 'Pending', value: user.pendingContainerCount },
        { name: 'Failed', value: user.failedContainerCount },
        { name: 'Succeeded', value: user.succeededContainerCount }
      ].map((item, index) => ({
        ...item,
        itemStyle: {
          color: this.colorsWarm[index % this.colorsWarm.length]
        }
      }))
    }));

    const option = {
      title: {
        text: 'Total Number of Containers Running per User (Top 10 Users by Usage)',
        left: 'left'
      },
      tooltip: {
        trigger: 'item'
      },
      xAxis: {
        type: 'category',
        data: seriesData.map(data => data.name),
        name: 'Users',
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 18,
          padding: [25, 0, 0, 0],
          color: 'black'
        }
      },
      yAxis: {
        type: 'value',
        name: 'Total Containers',
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 18,
          padding: [0, 0, 30, 0],
          color: 'black'
        }
      },
      series: [
        {
          type: 'bar',
          data: seriesData,
          label: {
            show: true,
            position: 'top'
          }
        }
      ]
    };

    this.chartInstance.setOption(option);

    this.chartInstance.on('click', (params) => {
      if (params.componentType === 'series' && params.seriesType === 'bar') {
        const drilldownData = drilldownSeries.find(series => series.id === params.name)?.data;
        if (drilldownData) {
          this.chartInstance.setOption({
            xAxis: {
              data: drilldownData.map(data => data.name)
            },
            series: [{
              name: params.name,
              type: 'bar',
              data: drilldownData
            }],
            title: {
              text: `${params.name} Containers`
            }
          });
        }
      }
    });

 
    const backButton = document.getElementById('backButton');
    if (backButton) {
      backButton.addEventListener('click', () => {
        this.chartInstance.setOption(option);
      });
    }
  }
}
