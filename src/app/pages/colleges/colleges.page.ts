import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProfileMenuComponent } from '../../profile-menu/profile-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.page.html',
  styleUrls: ['./colleges.page.scss'],
})
export class CollegesPage {
  colleges = [
    { name: 'College of Human Kinetics', imageUrl: '../../../assets/images/college pics/CHK/chk.png' },
    { name: 'College of Information and Computing Sciences', imageUrl: '../../../assets/images/college pics/CICS/cics.png' },
    { name: 'College of Industrial Technology', imageUrl: '../../../assets/images/college pics/CIT/cit.jpg' },
    { name: 'College of Medicine', imageUrl: '../../../assets/images/college pics/CM/com.png' },
    { name: 'College of Engineering and Agriculture', imageUrl: '../../../assets/images/college pics/COEA/eng1.jpg' },
    { name: 'College of Veterinary Medicine', imageUrl: '../../../assets/images/college pics/CVM/cvm.png' },
    { name: 'College of Public Administration', imageUrl: '../../../assets/images/college pics/CPA/cpa1.jpg' },
    { name: 'College of Natural Science an Mathematics', imageUrl: '../../../assets/images/college pics/CNSM/cnsm.jpg' },
  ];

  utilities = [
    { name: 'College Registrar', imageUrl: '../../../assets/images/college pics/registrar/registrar.png' },
    { name: 'Red Eagle Gymnasium', imageUrl: '../../../assets/images/college pics/gym/gym0.png' },
    { name: 'Agila Convenience Store', imageUrl: '../../../assets/images/college pics/store/store.png' },
    { name: 'Food Center', imageUrl: '../../../assets/images/college pics/food center/food-center.png' },
    { name: 'University Library', imageUrl: '../../../assets/images/college pics/library/library.png' },
    { name: 'Agila Fountain', imageUrl: '../../../assets/images/college pics/rotonda/rotunda.png' },
  ];

  filteredData = { colleges: [...this.colleges], utilities: [...this.utilities] };
  menuVisible = false;

  constructor(private popoverController: PopoverController, private router: Router) {}

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  logout() {
    this.router.navigate(['/login']);
    this.menuVisible = false;
  }

  async showProfileMenu(event: any) {
    const popover = await this.popoverController.create({
      component: ProfileMenuComponent,
      event: event,
      translucent: true,
    });
    return await popover.present();
  }

  filterColleges(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    // Filter colleges and utilities while maintaining categories
    this.filteredData.colleges = this.colleges.filter((college) =>
      college.name.toLowerCase().includes(searchTerm)
    );
    this.filteredData.utilities = this.utilities.filter((utility) =>
      utility.name.toLowerCase().includes(searchTerm)
    );
  }
}
