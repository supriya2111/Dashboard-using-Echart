import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrls: ['./layout3.component.css']
})
export class Layout3Component implements OnInit {


  stats = [
    { title: 'Storage', value: '500 GB', percentage: 80, status: 'Used', change: 'Increased 20% since last week', color: '#1e88e5', icon: 'fas fa-hdd', colorClass: 'blue' },
    { title: 'Users', value: '1200', percentage: 60, status: 'Active', change: 'Increased 15% since last week', color: '#43a047', icon: 'fas fa-users', colorClass: 'green' },
    { title: 'CPU Utilization', value: '65%', percentage: 65, status: 'Utilized', change: 'Increased 10% since last week', color: '#f4511e', icon: 'fas fa-microchip', colorClass: 'red' },
    { title: 'Containers', value: '200', percentage: 80, status: 'Running', change: 'Increased 5% since last week', color: '#fb8c00', icon: 'fas fa-box', colorClass: 'orange' },
    { title: 'Pipelines', value: '150', percentage: 80, status: 'Active', change: 'Increased 25% since last week', color: '#d81b60', icon: 'fas fa-project-diagram', colorClass: 'pink' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getLeftAnimation(percentage: number): string {
    if (percentage > 50) {
      return `loading-1 ${1.8 * (percentage / 100)}s linear forwards`;
    }
    return 'none';
  }

  getRightAnimation(percentage: number): string {
    if (percentage <= 50) {
      return `loading-1 ${1.8 * (percentage / 100)}s linear forwards`;
    }
    return `loading-1 0.9s linear forwards, loading-2 0.9s ${0.9 * (percentage / 100)}s linear forwards`;
  }
}
