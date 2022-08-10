import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
    
   }

   apiUrl="http://localhost:3500/test"

   //Get the data

   getMydata():Observable<any>{
    return this.http.get(`${this.apiUrl}`)

   }

   
   createMydata(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}`,data)

   }

   deleteMyData(userid:number):Observable<any>{
    let gId=userid;
   return this.http.delete(`${this.apiUrl}/${gId}`)

}

updateMyData(data:any,userid:number):Observable<any>{
  let gId=userid;

  return this.http.put(`${this.apiUrl}/${gId}`,data)
}

// GetSingleData using to patch the value from read component to Create Component

getSingleData(userid:number):Observable<any>{

  
  let gId=userid;

  return this.http.get(`${this.apiUrl}/${gId}`)

}
   
}
