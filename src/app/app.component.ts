import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Navegação',
      url: 'navegacao',
      icon: 'paper-plane'
    },
    {
      title: 'Botões',
      url: 'botao',
      icon: 'construct'
    },
    {
      title: 'Alertas',
      url: 'alert',
      icon: 'alert'
    },
    {
      title: 'Action-Sheet',
      url: 'actionsheet',
      icon: 'attach'
    },
    {
      title: 'Badge',
      url: 'badge',
      icon: 'barbell'
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'construct'
    },
    {
      title: 'CheckBox',
      url: 'checkbox',
      icon: 'construct'
    },
    {
      title: 'Chip',
      url: 'chip',
      icon: 'construct'
    }              
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
