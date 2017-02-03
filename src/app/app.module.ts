import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ActvitiesPage } from '../pages/activities/activities';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsHelpPage } from '../pages/details-help/details-help';
import { LoginPage } from '../pages/login/login'

import { LoadingData} from '../providers/loading-data'

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ActvitiesPage,
    HomePage,
    TabsPage,
    DetailsHelpPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ActvitiesPage,
    HomePage,
    TabsPage,
    DetailsHelpPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LoadingData]
})
export class AppModule {}
