import { Component, OnInit } from '@angular/core';
import { getAuth } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Initialize Firebase
  oApp = initializeApp(environment.firebase);
  oAuth = getAuth(this.oApp);

  // Define variables to store user info
  userEmail: string = '';
  userName: string = '';
  userCourse: string = '';

  constructor() { }

  ngOnInit() {
    // For demonstration, using hardcoded values. Replace with actual user data from your app.
    const user = this.oAuth.currentUser;
    if (user) {
      this.userEmail = user.email || 'No Email Found';
      this.userName = user.displayName || 'No Username Found';
      this.userCourse = 'Computer Science';  // Replace with dynamic value if necessary
    }
  }
}
