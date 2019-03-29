import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;


  constructor(private profilesservice:ProfilesService) { 
    this.profilesservice.getProfileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile=profile;
    });
  }

  ngOnInit() {
  }

}
