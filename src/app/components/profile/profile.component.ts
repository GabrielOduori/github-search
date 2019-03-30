import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { ProfileClass } from 'src/app/classes/profile-class';
import { RepoClass } from 'src/app/classes/repo-class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  repos:any;
  username:string;


  constructor(private profilesservice:ProfilesService) { 
  
  }

  findProfile(){
    this.profilesservice.updateProfile(this.username);
    this.profilesservice.getProfileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile=profile;
    });
    this.profilesservice.getRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos;
    });
  }

  ngOnInit() {
  }

}
