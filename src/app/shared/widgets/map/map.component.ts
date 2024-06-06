import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, VisualMapComponent, GeoComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { registerMap } from 'echarts/core';
import indiaJson from '../../../../assets/in.json';
import mahaJson from '../../../../assets/maharashtra_districts.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  readonly echartsExtensions: any[];
  echartsOptions: any = {};
  chartInstance: any;

  constructor() {
    this.echartsExtensions = [MapChart, TooltipComponent, LegendComponent, VisualMapComponent, GeoComponent];
  }

  ngOnInit() {
    registerMap('India', indiaJson as any);

    const cityData = [
      { name: 'Mumbai', value: [72.8777, 19.0760] },
      { name: 'Delhi', value: [77.1025, 28.7041] },
      { name: 'Bangalore', value: [77.5946, 12.9716] },
      { name: 'Hyderabad', value: [78.4867, 17.3850] },
      { name: 'Ahmedabad', value: [72.5714, 23.0225] },
      { name: 'Chennai', value: [80.2707, 13.0827] },
      { name: 'Kolkata', value: [88.3639, 22.5726] },
      { name: 'Pune', value: [73.8567, 18.5204] },
      { name: 'Jaipur', value: [75.7873, 26.9124] },
      { name: 'Lucknow', value: [80.9462, 26.8467] }
    ];

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
        seriesIndex: [0],
        realtime: true,
        itemWidth: 20,
        itemHeight: 250,
        padding: [0, 0, 50, 100],
        inRange: {
          color: [
            '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
            '#fee090', '#fdae61'
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
      geo: {
        map: 'India',
        roam:true,
        zoom: 1.2,
        label: {
          show: true,
          color: 'black'
        },
        emphasis: {
          label: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#f3f3f3',
            borderColor: '#999'
          },
          emphasis: {
            areaColor: '#f3f3f3'
          }
        }
      },
      series: [
        {
          name: 'Population',
          type: 'map',
          map: 'India',
          geoIndex: 0,
          emphasis: {
            label: {
              show: true,
            }
          },
          label: {
            show: true,
            color: 'black'
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
        },
        {
          name: 'Cities',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: cityData,
          symbol: 'pin', 
          symbolSize: 40,
          itemStyle: {
            color: 'red'  
          },
          label: {
            formatter: '{b}',
            position: 'left',
            color: 'red',
            show: true 
          },
          emphasis: {
            label: {
              show: true
            }
          }
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
