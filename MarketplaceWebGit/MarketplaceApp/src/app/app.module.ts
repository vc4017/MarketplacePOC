import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { SlidesComponent } from './slides/slides.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { Adal5Service, Adal5HTTPService } from 'adal-angular5';
import { HttpClient } from '@angular/common/http';
import { AddPresentationComponent } from './add-presentation/add-presentation.component';
import { ZoneDetailsComponent } from './presentations/zone-details/zone-details.component';

const routes: Routes = [
  {
     path:'',
     children: []
  },
  {
     path:'auth-callback',
     component:AuthCallbackComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    PresentationsComponent,
    SlidesComponent,
    AuthCallbackComponent,
    AppComponent,
    AddPresentationComponent,
    ZoneDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
    AngularFontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  
  exports: [RouterModule],
  providers: [AuthGuardService, AuthService, Adal5Service,
    { provide:Adal5HTTPService, 
      useFactory:Adal5HTTPService.factory,
     deps: [HttpClient, Adal5Service] 
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
