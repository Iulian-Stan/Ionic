import { TestBed } from '@angular/core/testing';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AComponent } from './components';
import { ADirective } from './directives';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [AppComponent, AComponent, ADirective],
      providers: [SplashScreen, StatusBar]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
