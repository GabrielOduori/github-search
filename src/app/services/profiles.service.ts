import { Injectable } from '@angular/core';
// import observables. Use the map operator to return all the results from Github in the form of observables 
//and use the observables in component and get the data
// import { map } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
//import http module we will use to make the request
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProfileClass } from '../classes/profile-class';
import { RepoClass } from '../classes/repo-class';
import { resolve, reject } from 'q';


@Injectable({
  providedIn: 'root'
})


export class ProfilesService {

  //Creating properties to use for getting data:

  private username:string;
  private apiKey = environment.apiKey
  private apiUrl=environment.apiUrl
  private id=environment.id

  profile:ProfileClass;
  repo:RepoClass;
  
  constructor(private http:HttpClient) { 
    console.log("Service is now ready");
    //this.username = "gabrieloduori"//"alexomaset"//"Ephraim-Kamau";//this will be replaced by searchbox
    
    this.profile = new ProfileClass(0,"","","","","","","","","","","","","","","",false,"","","","","","","",0,"",0,0,"","");
    this.repo  = new RepoClass(0,"","","","",0,"","",0,"","","","","","","","","",false,"")

  }
  //Function to get data from the API


  
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


  getNewProfileInfo(){
    interface ApiResponse{

      id:number;
      node_id:string;
      avatar_url:string;
      gravatar_id:string;
      url:string;
      html_url:string; 
      followers_url:string;
      following_url:string;
      gists_url:string;
      starred_url:string;
      subscriptions_url:string;
      organizations_url:string;
      repos_url:string;
      events_url:string;
      received_events_url:string;
      type:string;
      site_admin:boolean;
      name:string;
      company:string;
      blog:string;
      location:string;
      email:string;
      hireable:string;
      bio:string;
      public_repos:number;
      public_gists:string;
      followers:number;
      following:number;
      created_at:any;
      updated_at:any
    }

    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(this.apiUrl).toPromise().then(response=>{
        this.profile.name=response.name
        console.log(response)

        resolve()
      },
      error=>{
        reject(error)
      })
    })
    return promise

  }

  updateProfile(username:string){
    this.username=username 
  }
}
