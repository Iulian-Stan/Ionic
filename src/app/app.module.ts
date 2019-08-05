import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent }  from './app.component';
import { AComponent } from './components';
import { ADirective } from './directives';

@NgModule({
    imports: [BrowserModule, IonicModule.forRoot()],
    declarations: [AppComponent, AComponent, ADirective],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent],
    providers: [StatusBar, SplashScreen]
})
export class AppModule { }
