import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { ProfilesService } from './services/profiles.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
