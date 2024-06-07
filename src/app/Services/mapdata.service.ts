import { Injectable } from '@angular/core';
import { MapData } from '../interfaces/mapData';

@Injectable({
  providedIn: 'root'
})
export class MapdataService {

  mapData: MapData[] = [
    { name: 'Uttar Pradesh', value: 199812341 },
    { name: 'Maharashtra', value: 112374333 },
    { name: 'Bihar', value: 104099452 },
    { name: 'West Bengal', value: 91276115 },
    { name: 'Madhya Pradesh', value: 72626809 },
    { name: 'Tamil Nadu', value: 72147030 },
    { name: 'Rajasthan', value: 68548437 },
    { name: 'Karnataka', value: 61095297 },
    { name: 'Gujarat', value: 60439692 },
    { name: 'Andhra Pradesh', value: 49577103 },
    { name: 'Odisha', value: 41974218 },
    { name: 'Telangana', value: 35193978 },
    { name: 'Kerala', value: 33406061 },
    { name: 'Jharkhand', value: 32988134 },
    { name: 'Assam', value: 31205576 },
    { name: 'Punjab', value: 27743338 },
    { name: 'Chhattisgarh', value: 25545198 },
    { name: 'Haryana', value: 25351462 },
    { name: 'Uttarakhand', value: 10086292 },
    { name: 'Himachal Pradesh', value: 6864602 },
    { name: 'Tripura', value: 3673917 },
    { name: 'Meghalaya', value: 2966889 },
    { name: 'Manipur', value: 2855794 },
    { name: 'Nagaland', value: 1978502 },
    { name: 'Goa', value: 1458545 },
    { name: 'Arunachal Pradesh', value: 1383727 },
    { name: 'Mizoram', value: 1097206 },
    { name: 'Sikkim', value: 610577 }
  ]

  constructor() { }
}
