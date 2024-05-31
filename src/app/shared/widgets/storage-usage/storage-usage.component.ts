// storage-usage.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-storage-usage',
  templateUrl: './storage-usage.component.html',
  styleUrls: ['./storage-usage.component.css']
})
export class StorageUsageComponent {
  @Input() usedSpace: number = 49; // default value for demonstration
  @Input() totalSpace: number = 50; // default value for demonstration
  
  get usedPercentage(): number {
    return (this.usedSpace / this.totalSpace) * 100;
  }

  isWarning(): boolean {
    return this.usedPercentage >= 98;
  }
}
