import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// import { FleetComponent } from './fleet/fleet.component';
// import { FaqComponent } from './faq/faq.component';
// import { MembershipComponent } from './membership/membership.component';
// import { RulesComponent } from './rules/rules.component';
// import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SignupAddressComponent } from './auth/signup/forms/signup-address.component';
// import { SignupPersonalComponent } from './auth/signup/forms/signup-personal.component';
// import { SignupPhoneComponent } from './auth/signup/forms/signup-phone.component';
// import { SignupSailingComponent } from './auth/signup/forms/signup-sailing.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, pathMatch: "full" },
	{ path: 'contact', component: ContactComponent },
	// { path: 'our-fleet', component: FleetComponent },
	// { path: 'faq', component: FaqComponent },
	// { path: 'membership', component: MembershipComponent },
	// { path: 'rules-and-regulations', component: RulesComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
