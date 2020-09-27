import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SettingsService } from './services/settings.service';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settings: SettingsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createSettings();
    });
  }

  private createSettings() {
    if (!this.settings.hasSettings) {
      this.settings.set('version', appConfig.version);
      this.settings.set('languages', JSON.stringify(appConfig.languages));
      this.settings.set('cultureCodes', JSON.stringify(appConfig.cultureCodes));
      this.settings.set('currentLanguage', appConfig.currentLanguage);
      this.settings.set('randomChallenges', appConfig.randomChallenges);
      this.settings.set('countdownChallenges', appConfig.countdownChallenges);
    }
  }
}
