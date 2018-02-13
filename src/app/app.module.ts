import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatMenuModule, MatCommonModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
// import our services
import {AuthLoginService} from './services/auth-login.service';
import {AlertService, AuthRegisterService} from './services/auth-register.service';
import { AppRouting } from './app.routing';
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './directives/alert/alert.component';
import {ErrorInterceptorProvider} from './services/helper/error.interceptor';
import {JwtInterceptorProvider} from './services/helper/jwt.interceptor';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    MatMenuModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,


  ], //  our service providers
  providers: [AuthRegisterService,
              AuthLoginService,
              AuthGuard,
              AlertService,
              JwtInterceptorProvider,
              ErrorInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





