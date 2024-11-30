import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true, // Ensuring that this is a standalone component
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class LandingPage {

  constructor(private router: Router) {}

  // Change the navigation path to 'login'
  getStarted() {
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
