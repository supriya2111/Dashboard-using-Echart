import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, VisualMapComponent, GeoComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { registerMap } from 'echarts/core';
import indiaJson from '../../../../assets/in.json';
import mahaJson from '../../../../assets/maharashtra_districts.json';
import { MapData } from 'src/app/interfaces/mapData';
import { MapdataService } from 'src/app/Services/mapdata.service';
import { CityService } from 'src/app/Services/city.service';
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

  constructor(private mapService: MapdataService,private cityService:CityService,private userService:UsersService) {
    this.echartsExtensions = [MapChart, TooltipComponent, LegendComponent, VisualMapComponent, GeoComponent];
  }

  stateData: { name: string, value: number }[] = [];
  cityData:{name:string, value: number[]}[]=[];
  loggedInUserData:{name:string,city:string}[]=[];

  ngOnInit() {
    this.mapData = this.mapService.mapData;
    this.stateData = this.mapData.map(state => ({
      name: state.name,
      value: state.value
    }));

    this.cityData=this.cityService.cityData.map(city => ({
      name:city.name,
      value:city.value
    }))

    this.loggedInUserData=this.userService.loginUsers.map(user => ({
      name:user.name,
      city:user.city
    }))

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
        roam: true,
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
          data: this.stateData
        },
        {
          name: 'Cities',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: this.cityData,
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
      ],
    };
  }

  ngAfterViewInit(): void {
    const chartDom = document.getElementById('chart1');
    if (chartDom) {
      this.chartInstance = echarts.init(chartDom);
      this.chartInstance.setOption(this.echartsOptions);

      this.chartInstance.on('georoam', this.onGeoRoam);

      window.addEventListener('resize', this.resizeHandler);
    }
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.off('georoam', this.onGeoRoam);
    }
    window.removeEventListener('resize', this.resizeHandler);
  }

  private resizeHandler = () => {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  };

  private onGeoRoam = (event: any) => {
    const zoom = this.chartInstance.getOption().geo[0].zoom;
    if (zoom > 3) {
      this.chartInstance.setOption({
        series: [
          {
            name: 'Cities',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
              { name: 'Andheri', value: [72.8362, 19.1197] },
              { name: 'Borivali', value: [72.8604, 19.2297] }
            ],
            symbol: 'pin',
            symbolSize: 40,
            itemStyle: {
              color: 'blue'
            },
            label: {
              formatter: '{b}',
              position: 'left',
              color: 'blue',
              show: true
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        ]
      });
    } else {
      this.chartInstance.setOption({
        series: [
          {
            name: 'Cities',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.cityData,
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
      });
    }
  };

}
