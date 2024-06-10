import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, VisualMapComponent, GeoComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { registerMap } from 'echarts/core';
import indiaJson from '../../../../assets/in.json';
import { MapData } from 'src/app/interfaces/mapData.interface';
import { MapdataService } from 'src/app/Services/mapdata.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  readonly echartsExtensions: any[];
  echartsOptions: any = {};
  chartInstance: any;
  mapData: MapData[] = [];

  stateData: { name: string, value: number }[] = [];
  cityData: { name: string, value: number[], itemStyle: { color: string }, type?: string }[] = [];
  effectScatterCityData: { name: string, value: number[], itemStyle: { color: string }, type?: string }[] = [];
  scatterCityData: { name: string, value: number[], itemStyle: { color: string } }[] = [];
  loggedInUserData: { name: string, value: number[] }[] = [];


  constructor(private mapService: MapdataService, private userService: UsersService) {
    this.echartsExtensions = [MapChart, TooltipComponent, LegendComponent, VisualMapComponent, GeoComponent];
  }

  ngOnInit() {
    this.mapData = this.mapService.mapData;
    this.stateData = this.mapData.map(state => ({
      name: state.name,
      value: state.population
    }));

    const cityUserCounts = this.userService.loginUsers.reduce((acc: any, user) => {
      const city = user.city;
      if (!acc[city]) {
        acc[city] = {
          name: city,
          count: 0,
          coordinates: user.coordinates
        };
      }
      acc[city].count++;
      return acc;
    }, {});

    this.cityData = Object.values(cityUserCounts).map((cityInfo: any) => ({
      name: cityInfo.name,
      value: [...cityInfo.coordinates, cityInfo.count],
      itemStyle: { color: cityInfo.count > 5 ? 'blue' : 'red' },
      type: cityInfo.count > 5 ? 'effectScatter' : 'scatter'
    }));

    this.effectScatterCityData = this.cityData.filter(city => city.type === 'effectScatter');
    this.scatterCityData = this.cityData.filter(city => city.type === 'scatter');

    console.log(this.effectScatterCityData);
    console.log(this.scatterCityData);
    

    this.loggedInUserData = this.userService.loginUsers.map(user => ({
      name: user.name,
      value: user.coordinates
    }));

    //Map Implementation

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
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: (params: { name: any; value: any[]; }) => `${params.name}: ${params.value[2]}`,
        itemStyle: {
          color: 'black',
          fontWeight: 'bold'
        }
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
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
      geo: {
        map: 'India',
        roam: true,
        zoom: 1.2,
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
          data: this.stateData
        },
        {
          name: 'Cities',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: this.scatterCityData,
          symbol: 'pin',
          symbolSize: 30,
          label: {
            formatter: (params: { name: any; value: any[]; }) => `${params.name}: ${params.value[2]}`, // Display city name and count
            position: 'left',
            color: 'red',
            show: true
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Effect Cities',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: this.effectScatterCityData,
          symbol: 'circle',
          symbolSize: 20,
          label: {
            formatter: (params: { name: any; value: any[]; }) => `${params.name}: ${params.value[2]}`, // Display city name and count
            position: 'left',
            color: 'blue',
            fontSize: 18,
            show: true
          },
          emphasis: {
            label: {
              show: true
            }
          }
        }
      ],
    };
  }

  ngAfterViewInit(): void {
    const chartDom = document.getElementById('chart1');
    if (chartDom) {
      this.chartInstance = echarts.init(chartDom);
      this.chartInstance.setOption(this.echartsOptions);

      this.chartInstance.on('georoam', this.onGeoRoam);
    }
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.off('georoam', this.onGeoRoam);
    }
    
  }

  private onGeoRoam = (event: any) => {
    const zoom = this.chartInstance.getOption().geo[0].zoom;
    const updatedOptions = {
      series: [
        {
          name: 'Cities',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: zoom > 3 ? this.loggedInUserData : this.scatterCityData,
          symbol: 'pin',
          symbolSize: zoom > 3 ? 20 : 30,
          itemStyle: {
            color: zoom > 3 ? 'blue' : 'red'
          },
          label: {
            formatter: zoom > 3 ? '{b}' : (params: { name: any; value: any[]; }) => `${params.name}: ${params.value[2]}`, 
            position: 'left',
            color: zoom > 3 ? 'blue' : 'red',
            show: true
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Effect Cities',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: zoom > 3 ? [] : this.effectScatterCityData, 
          symbol: 'circle',
          symbolSize: 20,
          label: {
            formatter: (params: { name: any; value: any[]; }) => `${params.name}: ${params.value[2]}`, 
            position: 'left',
            color: 'blue',
            fontSize: 18,
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
    this.chartInstance.setOption(updatedOptions);
  };
}
