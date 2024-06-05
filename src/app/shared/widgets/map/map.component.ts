import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, VisualMapComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { registerMap } from 'echarts/core';
import indiaJson from '../../../../assets/in.json';
import mahaJson from '../../../../assets/maharashtra_districts.json'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  readonly echartsExtensions: any[];
  echartsOptions: any = {};
  chartInstance: any;

  constructor() {
    this.echartsExtensions = [MapChart, TooltipComponent, LegendComponent, VisualMapComponent];
  }

  ngOnInit() {
    registerMap('India', indiaJson as any);

    this.echartsOptions = {
      title: {
        text: 'India Population Estimates',
        left: 'right',
        textStyle: {
          color: 'red',
          fontSize: 24
        },
        padding: [50, 90, 10, 20]
     },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: '{b}: {c}'
      },
      visualMap: {
        left: 'left',
        min: 3000000,
        max: 200000000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          name: 'Population',
          type: 'map',
          map: 'India',
          roam: true,
          zoom: 1.2,
          emphasis: {
            label: {
              show: true,
            }
          },
          data: [
            { name: 'Uttar Pradesh', value: 199812341 },
            { name: 'Maharashtra', value: 112374333 },
            { name: 'Bihar', value: 104099452 },
            { name: 'West Bengal', value: 91276115 },
            { name: 'Madhya Pradesh', value: 72626809 },
            { name: 'Tamil Nadu', value: 72147030 },
            { name: 'Rajasthan', value: 68548437 },
            { name: 'Karnataka', value: 61095297 },
            { name: 'Gujarat', value: 60439692 },
            { name: 'Andhra Pradesh', value: 49577103 },
            { name: 'Odisha', value: 41974218 },
            { name: 'Telangana', value: 35193978 },
            { name: 'Kerala', value: 33406061 },
            { name: 'Jharkhand', value: 32988134 },
            { name: 'Assam', value: 31205576 },
            { name: 'Punjab', value: 27743338 },
            { name: 'Chhattisgarh', value: 25545198 },
            { name: 'Haryana', value: 25351462 },
            { name: 'Uttarakhand', value: 10086292 },
            { name: 'Himachal Pradesh', value: 6864602 },
            { name: 'Tripura', value: 3673917 },
            { name: 'Meghalaya', value: 2966889 },
            { name: 'Manipur', value: 2855794 },
            { name: 'Nagaland', value: 1978502 },
            { name: 'Goa', value: 1458545 },
            { name: 'Arunachal Pradesh', value: 1383727 },
            { name: 'Mizoram', value: 1097206 },
            { name: 'Sikkim', value: 610577 }
          ]
        }
      ]
    };
  }

  ngAfterViewInit(): void {
    const chartDom = document.getElementById('chart1');
    if (chartDom) {
      this.chartInstance = echarts.init(chartDom);
      this.chartInstance.setOption(this.echartsOptions);

      window.addEventListener('resize', this.resizeHandler);
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
  }

  private resizeHandler = () => {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  };

}
