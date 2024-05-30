import { Component, OnInit, AfterViewInit } from "@angular/core";
import { PieChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { EChartsOption } from "echarts";
import * as echarts from 'echarts/core';
import { GraphicComponent } from 'echarts/components';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, AfterViewInit {

  readonly echartsExtensions: any[];
  echartsOptions: EChartsOption = {};
  chartInstance: any;

  constructor() {
    this.echartsExtensions = [PieChart, TooltipComponent, GridComponent, LegendComponent, GraphicComponent];
  }

  ngOnInit() {
    this.echartsOptions = {
      tooltip: {
        trigger: 'item',
       // formatter: '{a} <br/>{b} : {c} ({d}%)',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          color: '#000'
        },
        padding: 10
      },
      legend: {
        bottom: 10,
        left: 'center'
      },
      toolbox: {
        show: true,
      },
      series: [
        {
          name: 'User Data',
          type: 'pie',
          radius: ['20%', '80%'],
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
          data: [
            { value: 40, name: 'user 1', itemStyle: { color: '#ff7f50' } },
            { value: 38, name: 'user 2', itemStyle: { color: '#87cefa' } },
            { value: 32, name: 'user 3', itemStyle: { color: '#da70d6' } },
            { value: 30, name: 'user 4', itemStyle: { color: '#32cd32' } },
            { value: 28, name: 'user 5', itemStyle: { color: '#6495ed' } },
            { value: 26, name: 'user 6', itemStyle: { color: '#ff69b4' } },
            { value: 22, name: 'user 7', itemStyle: { color: '#ba55d3' } },
            { value: 18, name: 'user 8', itemStyle: { color: '#cd5c5c' } }
          ]
        }
      ]
    };
  }

  ngAfterViewInit() {
    const chartDom = document.getElementById('pieChart')!;
    this.chartInstance = echarts.init(chartDom);
    this.chartInstance.setOption(this.echartsOptions);

    // Handle window resize
    window.addEventListener('resize', () => {
      this.chartInstance.resize();
    });
  }

}
