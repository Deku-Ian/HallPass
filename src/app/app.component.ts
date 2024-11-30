import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'; // Import MenuController

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private menuController: MenuController) {}

  // Method to handle navigation to different pages
  navigateTo(page: string) {
    this.menuController.close(); // Close the menu before navigating
    this.router.navigate([`/${page}`]); // Navigates to the passed route
  }

  logout() {
    // Add your logout logic here (e.g., clearing tokens, etc.)
    this.menuController.close(); // Close the menu before logout
    this.router.navigate(['/login']); // Redirect to login after logout
  }
}
