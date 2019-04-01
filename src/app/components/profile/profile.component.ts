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

  profile:any;
  repos:any;
  username:string;
  user:ProfileClass;
  newRepo:RepoClass;
  apiURL=environment.apiUrl
  // defaultUname='gabrieloduori'


  constructor(private profilesservice:ProfilesService, private http:HttpClient) { 
  
  }

  findUserProfile(){

    //update the username input
    this.profilesservice.updateProfile(this.username);
    this.profilesservice.getProfileInfo().subscribe(profile=>{
      this.profile=profile;
  
    });
    this.profilesservice.getRepos().subscribe(repos=>{
      this.repos=repos;
    });

  }

  userViaPromise(username:string){
    this.profilesservice.getNewProfileInfo();
  }

  ngOnInit() {
    this.profilesservice.getNewProfileInfo()
      .then(data => {
        this.user = new ProfileClass(
          data.avatar_url,
          data.followers_url,
          data.following_url,
          data.gists_url,
          data.login, 
          data.name,
          data.company,
          data.blog,
          data.bio,
          data.public_repos,
          data.public_gists,
          data.followers,
          data.following,
          data.created_at);
      });

      this.profilesservice.getNewRepoInfo()
      .then(dat =>{
        this.newRepo = new RepoClass(
          dat.name,
          dat.description
        );
      })
  
  }


}
