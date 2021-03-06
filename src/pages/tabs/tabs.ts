import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ActvitiesPage } from '../activities/activities';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ActvitiesPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
