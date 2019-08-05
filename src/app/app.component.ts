import { Component, VERSION } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    name = `Angular! v${VERSION.full}`

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen) {
        platform.ready()
            .then(() => {
                statusBar.styleDefault();
                splashScreen.hide();
        });
    }
}
