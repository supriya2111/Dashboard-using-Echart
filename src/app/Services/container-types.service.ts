import { Injectable } from '@angular/core';
import { ContainerType } from '../interfaces/containerType';

@Injectable({
  providedIn: 'root'
})
export class ContainerTypesService {

  constructor() { }

  containerType: ContainerType[] = [
    {
      username: "user1",
      totalRunningcontainer: 10,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 5,
      ContainerConatinercount: 7,
      CodeConatinercount: 3,
      otherConatinercount: 3
    },
    {
      username: "user2",
      totalRunningcontainer: 20,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 5,
      ContainerConatinercount: 7,
      CodeConatinercount: 3,
      otherConatinercount: 3
    },
    {
      username: "user3",
      totalRunningcontainer: 5,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 5,
      ContainerConatinercount: 7,
      CodeConatinercount: 3,
      otherConatinercount: 3
    },
    {
      username: "user4",
      totalRunningcontainer: 10,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 0,
      ContainerConatinercount: 1,
      CodeConatinercount: 1,
      otherConatinercount: 1
    },
    {
      username: "user5",
      totalRunningcontainer: 10,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 5,
      ContainerConatinercount: 7,
      CodeConatinercount: 3,
      otherConatinercount: 3
    },
    {
      username: "user6",
      totalRunningcontainer: 20,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 5,
      ContainerConatinercount: 7,
      CodeConatinercount: 3,
      otherConatinercount: 3
    },
    {
      username: "user7",
      totalRunningcontainer: 5,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 5,
      ContainerConatinercount: 7,
      CodeConatinercount: 3,
      otherConatinercount: 3
    },
    {
      username: "user8",
      totalRunningcontainer: 10,
      blastConatinercount: 4,
      GuiConatinercount: 3,
      NotebookConatinercount: 0,
      ContainerConatinercount: 1,
      CodeConatinercount: 1,
      otherConatinercount: 1
    }
  ]
}
