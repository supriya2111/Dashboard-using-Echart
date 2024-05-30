import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotaService {

  constructor(private http:HttpClient) { }

  userPerquota$ = this.http.get('http://localhost:8080/storage/getStorageStatperUser', {
    headers: new HttpHeaders({})
  }).pipe(
    catchError((error) => {
      console.log(error)
      return of([]);
    })
  )

  getName(data : any){
    console.log(data.username);    
    return this.http.get(`http://localhost:8080/storage/getStorageStatByUser/${data}`);
  }

  
}
