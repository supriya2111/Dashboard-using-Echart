import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    loginUsers: User[]=[
      { name: 'User1', city: 'Pune' },
      { name: 'User2', city: 'Pune' },
      { name: 'User3', city: 'Pune' },
      { name: 'User4', city: 'Pune' },
      { name: 'User5', city: 'Mumbai' },
      { name: 'User6', city: 'Mumbai' },
      { name: 'User7', city: 'Mumbai' },
      { name: 'User8', city: 'Mumbai' },
      { name: 'User9', city: 'Delhi' },
      { name: 'User10', city: 'Delhi' },
      { name: 'User11', city: 'Delhi' },
      { name: 'User12', city: 'Delhi' },
      { name: 'User13', city: 'Bangalore' },
      { name: 'User14', city: 'Bangalore' },
      { name: 'User15', city: 'Bangalore' },
      { name: 'User16', city: 'Bangalore' },
      { name: 'User17', city: 'Hyderabad' },
      { name: 'User18', city: 'Hyderabad' },
      { name: 'User19', city: 'Hyderabad' },
      { name: 'User20', city: 'Hyderabad' },
      { name: 'User21', city: 'Chennai' },
      { name: 'User22', city: 'Chennai' },
      { name: 'User23', city: 'Chennai' },
      { name: 'User24', city: 'Chennai' }
    ]
}
