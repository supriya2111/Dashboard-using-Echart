import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.css']
})
export class HeaderPartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user:string = 'Admin'
  img :string = 'https://cdn-icons-png.flaticon.com/512/2972/2972196.png';

}
