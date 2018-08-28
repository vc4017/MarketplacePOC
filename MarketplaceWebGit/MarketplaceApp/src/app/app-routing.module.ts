import { ZoneDetailsComponent } from './presentations/zone-details/zone-details.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { AddPresentationComponent } from './add-presentation/add-presentation.component';
import { SlidesComponent } from './slides/slides.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
   {
     path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
       children:
      [
           { path: 'presentation', component: PresentationsComponent },
           { path: 'zone-details', component: ZoneDetailsComponent },
           { path: 'addpresentation', component: AddPresentationComponent },
           { path: 'slides', component: SlidesComponent }
         ]
   }
  // { path: '', component: HomeComponent},
  // {
  //   path: 'home', component: HomeComponent,
  //     children:
  //      [
  //         { path: 'presentation', component: PresentationsComponent },
  //         { path: 'zone-details', component: ZoneDetailsComponent },
  //         { path: 'addpresentation', component: AddPresentationComponent },
  //         { path: 'slides', component: SlidesComponent }
  //       ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }