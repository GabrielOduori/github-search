import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { ProfileClass } from 'src/app/classes/profile-class';
import { RepoClass } from 'src/app/classes/repo-class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //These two uses observables;
  profile:any;
  repos:any;

  username:string;
  user:ProfileClass;
  newRepo:RepoClass;
  apiURL=environment.apiUrl

  constructor(private profilesservice:ProfilesService, private http:HttpClient) { 
  
  }

  findUserProfile(){

  
    this.profilesservice.updateProfile(this.username);
    this.profilesservice.getNewProfileInfo().then(data => {
      console.log('We get the data', data);
      this.user = new ProfileClass(
        data.avatar_url,
        data.html_url,
        data.following_url,
        
        data.gists_url,
        data.login, 
        data.name,
        data.company,
        data.blog,
        data.location,
        data.bio,
        data.public_repos,
        data.public_gists,
        data.followers,
        data.following,
        data.created_at);
    }).catch(error => {
      console.log('error', error)
    })
 
    this.profilesservice.getNewRepoInfo()
      .then(newrepo =>{
        console.log('Repo name', newrepo)
        this.repos = newrepo;
      }).catch(error => {
        console.log('error', error)
      })
 
  }

  userViaPromise(username:string){
    this.profilesservice.getNewProfileInfo();
    this.profilesservice.getNewRepoInfo();
  }

  ngOnInit() {
  
  }


}
