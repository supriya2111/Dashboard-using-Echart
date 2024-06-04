import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-layout2',
  templateUrl: './header-layout2.component.html',
  styleUrls: ['./header-layout2.component.css']
})
export class HeaderLayout2Component implements OnInit {

  cards = [
    {
      title: 'Storage',
      value: '120GB',
      icon: 'fas fa-database',
      backgroundColor: '#e3f2fd',
      color: '#1e88e5'
    },
    {
      title: 'Users',
      value: '1,200',
      icon: 'fas fa-users',
      backgroundColor: '#e8f5e9',
      color: '#43a047'
    },
    {
      title: 'CPU Utilization',
      value: '85%',
      icon: 'fas fa-microchip',
      backgroundColor: '#fce4ec',
      color: '#d81b60'
    },
    {
      title: 'Containers',
      value: '150',
      icon: 'fas fa-boxes',
      backgroundColor: '#fbe9e7',
      color: '#ff7043'
    },
    {
      title: 'Pipelines',
      value: '45',
      icon: 'fas fa-tasks',
      backgroundColor: '#f3e5f5',
      color: '#ab47bc'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
