import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    loginUsers: User[] = [
      { name: 'User1', city: 'Pune', coordinates: [73.8567, 18.5204] },
      { name: 'User2', city: 'Pune', coordinates: [73.8560, 18.5210] },
      { name: 'User3', city: 'Pune', coordinates: [73.8570, 18.5200] },
      { name: 'User4', city: 'Pune', coordinates: [73.8555, 18.5215] },
      { name: 'User5', city: 'Mumbai', coordinates: [72.8777, 19.0760] },
      { name: 'User6', city: 'Mumbai', coordinates: [72.8780, 19.0755] },
      { name: 'User7', city: 'Mumbai', coordinates: [72.8770, 19.0765] },
      { name: 'User8', city: 'Mumbai', coordinates: [72.8775, 19.0762] },
      { name: 'User9', city: 'Delhi', coordinates: [77.1025, 28.7041] },
      { name: 'User10', city: 'Delhi', coordinates: [77.1020, 28.7045] },
      { name: 'User11', city: 'Delhi', coordinates: [77.1030, 28.7040] },
      { name: 'User12', city: 'Delhi', coordinates: [77.1027, 28.7043] },
      { name: 'User13', city: 'Bangalore', coordinates: [77.5946, 12.9716] },
      { name: 'User14', city: 'Bangalore', coordinates: [77.5950, 12.9710] },
      { name: 'User15', city: 'Bangalore', coordinates: [77.5940, 12.9720] },
      { name: 'User16', city: 'Bangalore', coordinates: [77.5948, 12.9718] },
      { name: 'User17', city: 'Hyderabad', coordinates: [78.4867, 17.3850] },
      { name: 'User18', city: 'Hyderabad', coordinates: [78.4870, 17.3845] },
      { name: 'User19', city: 'Hyderabad', coordinates: [78.4860, 17.3855] },
      { name: 'User20', city: 'Hyderabad', coordinates: [78.4865, 17.3852] },
      { name: 'User21', city: 'Chennai', coordinates: [80.2707, 13.0827] },
      { name: 'User22', city: 'Chennai', coordinates: [80.2700, 13.0830] },
      { name: 'User23', city: 'Chennai', coordinates: [80.2710, 13.0820] },
      { name: 'User24', city: 'Chennai', coordinates: [80.2705, 13.0825] },
      { name: 'User25', city: 'Pune', coordinates: [73.8570, 18.5205] },
      { name: 'User26', city: 'Pune', coordinates: [73.8555, 18.5200] },
      { name: 'User27', city: 'Pune', coordinates: [73.8565, 18.5206] },
      { name: 'User28', city: 'Pune', coordinates: [73.8562, 18.5210] },
      { name: 'User29', city: 'Chennai', coordinates: [80.2707, 13.0827] },
      { name: 'User30', city: 'Chennai', coordinates: [80.2705, 13.0830] },
      { name: 'User31', city: 'Chennai', coordinates: [80.2708, 13.0825] },
      { name: 'User32', city: 'Chennai', coordinates: [80.2710, 13.0820] },
    ];
}
