import { Injectable } from '@angular/core';
import { ContainerTypeStatus } from '../interfaces/containerTypeStatus';

@Injectable({
  providedIn: 'root'
})
export class ContainerTypeStatusService {

  constructor() { }

  containerTypeStatusData: ContainerTypeStatus[] = [
    {
      type: "null",
      totalContainerCount: 38,
      runningContainerCount: 0,
      completedContainerCount: 0,
      pendingContainerCount: 38,
      failedContainerCount: 0,
      succeededContainerCount: 0
    },
    {
      type: "blast",
      totalContainerCount: 97,
      runningContainerCount: 0,
      completedContainerCount: 62,
      pendingContainerCount: 0,
      failedContainerCount: 20,
      succeededContainerCount: 15
    },
    {
      type: "container",
      totalContainerCount: 15,
      runningContainerCount: 3,
      completedContainerCount: 4,
      pendingContainerCount: 0,
      failedContainerCount: 8,
      succeededContainerCount: 0
    },
    {
      type: "gui",
      totalContainerCount: 24,
      runningContainerCount: 1,
      completedContainerCount: 8,
      pendingContainerCount: 7,
      failedContainerCount: 8,
      succeededContainerCount: 0
    },
    {
      type: "notebook",
      totalContainerCount: 29,
      runningContainerCount: 3,
      completedContainerCount: 3,
      pendingContainerCount: 5,
      failedContainerCount: 18,
      succeededContainerCount: 0
    },
    {
      type: "pipeline",
      totalContainerCount: 2,
      runningContainerCount: 0,
      completedContainerCount: 1,
      pendingContainerCount: 0,
      failedContainerCount: 1,
      succeededContainerCount: 0
    }
  ]
  
}
