import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat/'
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LivrosComponent } from './components/livros/livros.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { LeitoresComponent } from './pages/leitores/leitores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LivrosComponent,
    EmprestimosComponent,
    LeitoresComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    SharedComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }