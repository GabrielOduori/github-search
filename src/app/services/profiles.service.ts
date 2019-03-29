import { Injectable } from '@angular/core';
// import observables. Use the map operator to return all the results from Github in the form of observables 
//and use the observables in component and get the data
// import { map } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
//import http module we will use to make the request
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ProfilesService {

  //Creating properties to use for getting data:

  private username:string;
  private apiKey = environment.apiKey
  private apiUrl=environment.apiUrl
  private id=environment.id
  
  constructor(private http:HttpClient) { 
    console.log("Service is now ready");
    this.username = "alexomaset"//"Ephraim-Kamau";//this will be replaced by searchbox
  }
  //Function to get data
  getProfileInfo(){
    return this.http.get(this.apiUrl + this.username +"?client_id=" +this.id+"&client_secret=" + this.apiKey);
    
    // .pipe(map(res => res.valueOf()));
    
    
    // .pipe(map(res=>res.json()));
  
  }
  getRepos(){
    return this.http.get(this.apiUrl + this.username +"/repos"+"?client_id=" +this.id+"&client_secret=" + this.apiKey);
    // .pipe(map(res=>res.JSON()));;
   
  // .pipe(map(res=>res.json()));

  }
}
