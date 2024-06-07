import { Injectable } from '@angular/core';
import { City } from '../interfaces/cityData.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityData: City[] = [
    { name: 'Mumbai', coordinates: [72.8777, 19.0760] },
    { name: 'Delhi', coordinates: [77.1025, 28.7041] },
    { name: 'Bangalore', coordinates: [77.5946, 12.9716] },
    { name: 'Hyderabad', coordinates: [78.4867, 17.3850] },
    { name: 'Ahmedabad', coordinates: [72.5714, 23.0225] },
    { name: 'Chennai', coordinates: [80.2707, 13.0827] },
    { name: 'Kolkata', coordinates: [88.3639, 22.5726] },
    { name: 'Pune', coordinates: [73.8567, 18.5204] },
    { name: 'Jaipur', coordinates: [75.7873, 26.9124] },
    { name: 'Lucknow', coordinates: [80.9462, 26.8467] }
  ]
}
