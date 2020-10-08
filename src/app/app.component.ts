import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LocalStorageService } from './services/local-storage.service';
import { appConfig } from './shared/constants';

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
    private localStorage: LocalStorageService
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
    if (!this.localStorage.hasSettings) {
      // Create stats storage
      this.localStorage.set('stats', {});

      for (const key in appConfig) {
        if (appConfig.hasOwnProperty(key)) {
          this.localStorage.set(key, appConfig[key]);
        }
      }
    }
  }
}
