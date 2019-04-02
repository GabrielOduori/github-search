import { Injectable } from '@angular/core';
// import observables. Use the map operator to return all the results from Github in the form of observables 
//and use the observables in component and get the data
import { map } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
//import http module we will use to make the request
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProfileClass } from '../classes/profile-class';
import { RepoClass } from '../classes/repo-class';
import { resolve, reject } from 'q';
import { $ } from 'protractor';
// import 'rxjs/add/operator'


@Injectable({
  providedIn: 'root'
})


export class ProfilesService {

  //Creating properties to use for getting data:

  // username:string  ="gabrieloduori";
  // username:string ="gabrieloduori"
  public username:string;
  
  private apiKey=environment.apiKey
  private apiUrl=environment.apiUrl
  private id=environment.id

  userPromise:ProfileClass;
  repoPromise:RepoClass;

 
  
  constructor(private http:HttpClient) { 
    console.log("Service is running well");


    this.userPromise = new ProfileClass("","","","","","","","","","",0,"",0,0,"");
    this.repoPromise  = new RepoClass("","", "")

  }



  //Using observables
  getProfileInfo(){
    return this.http.get(this.apiUrl + this.username +"?client_id=" +this.id+"&client_secret=" + this.apiKey);
    
  }
  getRepos(){
    return this.http.get(this.apiUrl + this.username +"/repos"+"?client_id=" +this.id+"&client_secret=" + this.apiKey);
   
  }

  //Using promises
  getNewProfileInfo(){
    interface ApiResponse{
         avatar_url:string; 
         following_url:string;
         html_url:string;
         gists_url:string;
        login:string;
        name:string;
        company:string;
         blog:string;
         location:string;
         bio:string;
         public_repos:number;
         public_gists:string;
        followers:number;
        following:number;
        created_at:any;
    }

    let  userAPI = `${this.apiUrl}${this.username}?client_id=${this.id}&client_secret=${this.apiKey}`;

    return this.http.get<ApiResponse>(userAPI)

      .toPromise()
  }

  getNewRepoInfo(){
    interface ApiResponse{
      name:string;
      html_url:string;
      description:string;
    }

    let  repoAPI = `${this.apiUrl}${this.username}/repos?client_id=${this.id}&client_secret=${this.apiKey}`;
    return this.http.get<ApiResponse>(repoAPI)

    .toPromise()

  }

  //Updating the username input from the input box
  updateProfile(username:string){
    this.username=username
  }
 
}
