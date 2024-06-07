import { Injectable } from '@angular/core';
import { City } from '../interfaces/cityData';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityData: City[] = [
    { name: 'Mumbai', value: [72.8777, 19.0760] },
    { name: 'Delhi', value: [77.1025, 28.7041] },
    { name: 'Bangalore', value: [77.5946, 12.9716] },
    { name: 'Hyderabad', value: [78.4867, 17.3850] },
    { name: 'Ahmedabad', value: [72.5714, 23.0225] },
    { name: 'Chennai', value: [80.2707, 13.0827] },
    { name: 'Kolkata', value: [88.3639, 22.5726] },
    { name: 'Pune', value: [73.8567, 18.5204] },
    { name: 'Jaipur', value: [75.7873, 26.9124] },
    { name: 'Lucknow', value: [80.9462, 26.8467] }
  ]
}
