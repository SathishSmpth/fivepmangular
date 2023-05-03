import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandPageComponent } from './components/pages/land-page/land-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SignUpFormComponent } from './components/pages/sign-up-form/sign-up-form.component';
import { UsersComponent } from './components/pages/users/users.component';

const routes: Routes = [
  { path: '', component: LandPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
