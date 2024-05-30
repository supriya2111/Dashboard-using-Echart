import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userdata:Data[] = 
    [
      {
          userName: "user1",
          totalContainerCount: 4,
          runningContainerCount: 2,
          completedContainerCount: 1,
          pendingContainerCount: 0,
          failedContainerCount: 0,
          succeededContainerCount: 0
      },
      {
          userName: "user2",
          totalContainerCount: 8,
          runningContainerCount: 3,
          completedContainerCount: 5,
          pendingContainerCount: 0,
          failedContainerCount: 3,
          succeededContainerCount: 5
      },
      {
         userName: "user3",
         totalContainerCount: 6,
         runningContainerCount: 3,
         completedContainerCount: 4,
         pendingContainerCount: 0,
         failedContainerCount: 3,
         succeededContainerCount: 3
      },
      {
          userName: "user4",
          totalContainerCount: 3,
          runningContainerCount: 6,
          completedContainerCount: 3,
          pendingContainerCount: 3,
          failedContainerCount: 0,
          succeededContainerCount: 1
      },
      {
         userName : "user5",
         totalContainerCount : 7,
         runningContainerCount : 2,
         completedContainerCount : 4,
         pendingContainerCount : 0,
         failedContainerCount : 1,
         succeededContainerCount : 2
      },
      {
         userName : "user6",
         totalContainerCount : 1,
         runningContainerCount : 1,
         completedContainerCount : 0,
         pendingContainerCount : 0,
         failedContainerCount : 2,
         succeededContainerCount : 2
      },
      {
          userName: "user7",
          totalContainerCount: 4,
          runningContainerCount: 7,
          completedContainerCount: 0,
          pendingContainerCount: 0,
          failedContainerCount: 0,
          succeededContainerCount: 8
      },
      {
          userName: "user8",
          totalContainerCount: 1,
          runningContainerCount: 1,
          completedContainerCount: 0,
          pendingContainerCount: 0,
          failedContainerCount: 4,
          succeededContainerCount: 3
      }
  ]
  
}
