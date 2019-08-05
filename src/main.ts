import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
}

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
  document.addEventListener('deviceready', () => bootstrap());
} else {
  bootstrap();
}
