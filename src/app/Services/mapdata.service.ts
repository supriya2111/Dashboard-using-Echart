import { Injectable } from '@angular/core';
import { MapData } from '../interfaces/mapData.interface';

@Injectable({
  providedIn: 'root'
})
export class MapdataService {

  mapData: MapData[] = [
    { name: 'Uttar Pradesh', population: 199812341 },
    { name: 'Maharashtra', population: 112374333 },
    { name: 'Bihar', population: 104099452 },
    { name: 'West Bengal', population: 91276115 },
    { name: 'Madhya Pradesh', population: 72626809 },
    { name: 'Tamil Nadu', population: 72147030 },
    { name: 'Rajasthan', population: 68548437 },
    { name: 'Karnataka', population: 61095297 },
    { name: 'Gujarat', population: 60439692 },
    { name: 'Andhra Pradesh', population: 49577103 },
    { name: 'Odisha', population: 41974218 },
    { name: 'Telangana', population: 35193978 },
    { name: 'Kerala', population: 33406061 },
    { name: 'Jharkhand', population: 32988134 },
    { name: 'Assam', population: 31205576 },
    { name: 'Punjab', population: 27743338 },
    { name: 'Chhattisgarh', population: 25545198 },
    { name: 'Haryana', population: 25351462 },
    { name: 'Uttarakhand', population: 10086292 },
    { name: 'Himachal Pradesh', population: 6864602 },
    { name: 'Tripura', population: 3673917 },
    { name: 'Meghalaya', population: 2966889 },
    { name: 'Manipur', population: 2855794 },
    { name: 'Nagaland', population: 1978502 },
    { name: 'Goa', population: 1458545 },
    { name: 'Arunachal Pradesh', population: 1383727 },
    { name: 'Mizoram', population: 1097206 },
    { name: 'Sikkim', population: 610577 }
  ]

  constructor() { }
}
