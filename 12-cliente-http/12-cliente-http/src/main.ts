import { bootstrapApplication } from '@angular/platform-browser';

import { ComponenteApp } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(ComponenteApp, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
