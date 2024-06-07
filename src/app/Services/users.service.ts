import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    loginUsers: User[] = [
      { name: 'User1', city: 'Pune', coordinates: [73.8567, 18.5204] },
      { name: 'User2', city: 'Pune', coordinates: [73.1000, 18.5204] },
      { name: 'User3', city: 'Pune', coordinates: [73.2000, 18.5204] },
      { name: 'User4', city: 'Pune', coordinates: [73.2500, 18.5204] },
      { name: 'User5', city: 'Mumbai', coordinates: [72.8777, 19.0760] },
      { name: 'User6', city: 'Mumbai', coordinates: [72.8777, 19.0760] },
      { name: 'User7', city: 'Mumbai', coordinates: [72.8777, 19.0760] },
      { name: 'User8', city: 'Mumbai', coordinates: [72.8777, 19.0760] },
      { name: 'User9', city: 'Delhi', coordinates: [77.1025, 28.7041] },
      { name: 'User10', city: 'Delhi', coordinates: [77.1025, 28.7041] },
      { name: 'User11', city: 'Delhi', coordinates: [77.1025, 28.7041] },
      { name: 'User12', city: 'Delhi', coordinates: [77.1025, 28.7041] },
      { name: 'User13', city: 'Bangalore', coordinates: [77.5946, 12.9716] },
      { name: 'User14', city: 'Bangalore', coordinates: [77.5946, 12.9716] },
      { name: 'User15', city: 'Bangalore', coordinates: [77.5946, 12.9716] },
      { name: 'User16', city: 'Bangalore', coordinates: [77.5946, 12.9716] },
      { name: 'User17', city: 'Hyderabad', coordinates: [78.4867, 17.3850] },
      { name: 'User18', city: 'Hyderabad', coordinates: [78.4867, 17.3850] },
      { name: 'User19', city: 'Hyderabad', coordinates: [78.4867, 17.3850] },
      { name: 'User20', city: 'Hyderabad', coordinates: [78.4867, 17.3850] },
      { name: 'User21', city: 'Chennai', coordinates: [80.2707, 13.0827] },
      { name: 'User22', city: 'Chennai', coordinates: [80.2707, 13.0827] },
      { name: 'User23', city: 'Chennai', coordinates: [80.2707, 13.0827] },
      { name: 'User24', city: 'Chennai', coordinates: [80.2707, 13.0827] },
      { name: 'User25', city: 'Pune', coordinates: [73.8567, 18.5204] },
      { name: 'User26', city: 'Pune', coordinates: [73.1000, 18.5000] },
      { name: 'User27', city: 'Pune', coordinates: [73.2000, 18.5604] },
      { name: 'User28', city: 'Pune', coordinates: [73.2500, 18.5904] },
      { name: 'User29', city: 'Chennai', coordinates: [80.2707, 13.0827] },
      { name: 'User30', city: 'Chennai', coordinates: [80.2007, 13.0827] },
      { name: 'User31', city: 'Chennai', coordinates: [80.2507, 13.0827] },
      { name: 'User31', city: 'Chennai', coordinates: [80.2600, 13.0827] },
    ];
}
